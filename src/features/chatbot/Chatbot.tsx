import React, { useState, useMemo, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setAnswersArray, answersArray, Answer, resetConversation } from "./ChatbotSlice";
import { questions, Question } from "../../questions";
import { getEditInput } from "./AnswerType";
import Modal from "./EditModal";
import ChatbotFeatures from "./ChatbotFeatures";
import PreviewModal from "./PreviewModal";
import styles from "./Chatbot.module.css";
import { PiPencilBold } from "react-icons/pi";
import logo from '../../image/chabot.png'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { validateAnswer } from "./utils";
function Chatbot() {
  const [editingAnswer, setEditingAnswer] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [questionIndexInModal, setQuestionIndexInModal] = useState<number>(-1);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);
  const answers = useAppSelector(answersArray);
  const dispatch = useAppDispatch();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const processDuplicatedQuestionId = (result: Question[], id: Question["id"] | undefined) => {
    let newId = id;
    let count = 1;
    let orderIds = result.map((item) => item.id);
    if (typeof newId === 'string' || typeof newId === 'number') {
      while (orderIds.includes(newId)) {
        newId = `${id}:${count}`;
        count++;
      }
    }
    return newId;
  }

  const getOriginalQuestionId = (questionId: string | number | boolean | null) => {
    let result = questionId;
    if (typeof questionId === 'boolean' || questionId === 'null') return result;
    if (typeof questionId === 'number') return questionId;
    if (questionId?.includes(":")) {
      result = Number(questionId.split(":")[0]);
    }
    return result;
  };

  const displayQuestions: Question[] | undefined = useMemo(() => {
    if (!questions) return;
    const result: Question[] = [];
    if (answers.length === 0) {
      const questionTime = new Date().toISOString();
      questions[0].questionTimestamp = questionTime;
      result.push(questions[0]);
      return result;
    } else {
      // find the frist question in the answers array and push it to the result array
      let currentQuestionId: Question["id"] | null | boolean = questions[0].id;
      let currentAnswer = answers.find((item) => item.id === currentQuestionId);
      if (currentAnswer) {
        result.push({ ...currentAnswer, ...questions[0] });
      } else {
        return;
      }

      const findNextQuestion = (nextQuestionInfo: Question["nextQuestion"], currentAnswer: Answer) => {
        if (nextQuestionInfo?.length === 1) {
          return nextQuestionInfo[0].id;
        } else {
          return nextQuestionInfo?.find((obj) => obj.value === currentAnswer.answer)?.id;
        }
      }

      // handle the rest of the questions
      while (currentAnswer) {
        let nextQuestionInfo = questions?.find(q => q.id === currentQuestionId)?.nextQuestion;
        if (!nextQuestionInfo || nextQuestionInfo.length === 0) break;
        let nextQuestionId: number | null | undefined = findNextQuestion(nextQuestionInfo, currentAnswer);
        if (nextQuestionId === null) {
          return result;
        };
        currentQuestionId = nextQuestionId as Question["id"];
        // find duplicated question id
        let processId: Question["id"] | undefined;
        if (result.find((item) => item.id === nextQuestionId)) {
          const ids = result.map((item) => item.id);
          const filterIds = ids.filter((item) => Number(item.toString().split(":")[0]) === nextQuestionId);
          const sortIds = filterIds.sort((a, b) => Number(a) - Number(b));
          processId = `${nextQuestionId}:${sortIds.length}`;
        } else {
          processId = nextQuestionId;
        }
        currentAnswer = answers.find(item => item.id === processId);
        // console.log('currentAnswer', currentAnswer, processId, nextQuestionId);
        if (currentAnswer) {
          let nextQuestion = questions.find(q => q.id === nextQuestionId);
          // console.log('nextQuestion', nextQuestion, questions);
          if (nextQuestion) {
            result.push({ ...currentAnswer, ...nextQuestion, id: processId as Question["id"] });
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }

    // find the last question in the answers array
    const lastQuestionId: string | number | boolean = result.length > 0 && result[result.length - 1].id
    const id = getOriginalQuestionId(lastQuestionId);
    const answer = result.length > 0 && result[result.length - 1].answer;
    const lastAnswerQuestionConfig: Question | undefined = questions.find(
      (item) => item.id === id
    );
    // push the next question to the result array
    if (lastAnswerQuestionConfig) {
      const { nextQuestion } = lastAnswerQuestionConfig;
      const nextQuestionId = nextQuestion?.length === 1 ? nextQuestion[0]?.id : nextQuestion?.filter((obj) => obj.value === answer)[0]?.id;
      if (!nextQuestionId) {
        return result;
      }
      const nextQuestionConfig: Question | undefined = questions.find((question) => question.id === nextQuestionId);
      if (nextQuestionConfig) {
        const id = processDuplicatedQuestionId(result, nextQuestionId);
        const questionTime = new Date().toISOString();
        const nextQuestionConfigNew = { ...nextQuestionConfig };
        nextQuestionConfigNew.questionTimestamp = questionTime;
        nextQuestionConfigNew.id = id as Question["id"];
        result.push(nextQuestionConfigNew);
      }
    }
    return result;
  }, [answers]);

  useEffect(scrollToBottom, [displayQuestions]);

  const handleAnswer = () => {
    const currentQuestion = displayQuestions?.[displayQuestions.length - 1] as Question;
    const { answerType } = currentQuestion;

    if (!validateAnswer(editingAnswer, answerType, dispatch)) {
      return;
    }

    dispatch(
      setAnswersArray({
        answerObj: {
          id: currentQuestion.id,
          answer: editingAnswer,
          questionTimestamp: typeof currentQuestion.questionTimestamp === 'string' ? currentQuestion.questionTimestamp : currentQuestion.questionTimestamp.toISOString(),
          answerTimestamp: new Date().toISOString(),
        }, fromModal: false
      })
    );
    setEditingAnswer("");
  };

  const timeLocalizer = (time: any) => {
    if (!time) return;
    if (typeof time === "string") {
      // check time string contains timezone
      return new Date(`${time}${time.includes("Z") ? "" : "Z"}`).toLocaleString(
        "en-CA"
      );
    }
    return time.toLocaleString("en-CA");
  };

  const handleStateEditingAnswer = (value: any) => {
    setEditingAnswer(value);
  }

  const handleResetConversation = () => {
    dispatch(resetConversation());
    setEditingAnswer("");
    setShowResetModal(false);
  }

  console.log('displayQuestions', displayQuestions)

  const showEndMessage = displayQuestions && (displayQuestions[displayQuestions.length - 1]?.nextQuestion?.find(obj => obj.value === displayQuestions[displayQuestions.length - 1]?.answer && obj.id === null) ? true : false);
  
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col w-1/4 p-5 bg-[#66B032]">
        <ChatbotFeatures />
      </div>
      <div className="flex flex-col w-3/4 relative">
        <div className="flex justify-between items-center p-5 bg-[#66B032]">
          <div className="flex justify-center items-center h-full">
            <button
              type="button"
              className={`text-[#375F1B]] font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out ${showEndMessage ? 'bg-[#EBF7E3] hover:bg-[#375F1B] hover:text-[#EBF7E3]  focus:outline-none' : 'bg-gray-300 cursor-not-allowed'}`}
              onClick={() => showEndMessage && setShowPreviewModal(true)}
              disabled={!showEndMessage}
            >
              Preview
            </button>
          </div>
          <div className="flex items-center group relative">
            <svg className="h-6 w-6 text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => setShowResetModal(true)}>
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            <span className="absolute right-full bottom-0 ml-0 px-2 py-1 bg-[#375F1B] text-sm text-white rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out font-sans">
              Reset
            </span>
          </div>
        </div>
        <div className="p-5 overflow-y-auto" style={{ height: 'calc(100vh - 270px)' }}>
          <ul className="p-4">
            {displayQuestions &&
              displayQuestions.map((item, i, items) => {
                const { answer, questionTimestamp, answerTimestamp, question } = item;
                return (
                  <React.Fragment key={i}>
                    <li
                      className={`flex flex-col justify-start gap-y-0.5 ${i === items.length - 1 ? styles.slow : ""
                        }`}
                      key={i + "b"}
                    >
                      <div>
                        <div className="flex flex-row gap-x-1.5">
                          <img src={logo} alt='chatbot logo' className="h-10 w-10 self-center" />
                          <span className="bg-[#375F1B] text-[#f1f5f9] px-2 py-1.5 rounded-md">
                            {question}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs">{timeLocalizer(questionTimestamp)}</div>
                      <div ref={messagesEndRef} />
                    </li>
                    {(i < displayQuestions.length - 1 || (i === displayQuestions.length - 1 && showEndMessage)) && <li className="flex flex-col gap-y-0.5" key={i + "a"}>
                      <div className="flex flex-row justify-end items-center gap-x-0.5">
                        <span className="bg-[#66B032] text-[#f1f5f9] px-2 py-1.5 rounded-md">
                          {answer}
                        </span>
                        <PiPencilBold className="w-7 h-7 fill-[#375F1B] hover:fill-[#1B3409]" onClick={() => {
                          setShowModal(true);
                          setQuestionIndexInModal(i);
                        }} />
                      </div>
                      <div className="flex justify-end text-xs">{timeLocalizer(answerTimestamp)}</div>
                      <div ref={messagesEndRef} />
                    </li>}
                  </React.Fragment>
                );
              })}
            {showEndMessage && <li
              className="flex flex-col justify-start gap-y-0.5"
            >
              <div>
                <div className="flex flex-row gap-x-1.5">
                  <img src={logo} alt='chatbot logo' className="h-10 w-10 self-center" />
                  <div className="bg-[#375F1B] text-[#f1f5f9] px-2 py-1.5 rounded-sm">
                    You've reached the final question. Press the Preview button to review all your answers.
                  </div>
                </div>
              </div>
              <div ref={messagesEndRef} />
            </li>}
          </ul>
        </div>
        <div className="p-5 bg-green-100 absolute bottom-0 w-full">
          {!showEndMessage &&
            <div className="flex items-center space-x-2">
              {displayQuestions &&
                getEditInput(
                  displayQuestions[displayQuestions.length - 1],
                  editingAnswer,
                  handleStateEditingAnswer,
                  handleAnswer
                )}
              <button className="bg-[#66B032] hover:bg-[#1B3409] text-white font-bold py-2 px-4 rounded-lg transition duration-200 Condensed title-font" onClick={() => handleAnswer()}>
                Send
              </button>
            </div>}
        </div>
      </div>
      {showModal && <Modal questionIndexInModal={questionIndexInModal} displayQuestions={displayQuestions} setShowModal={setShowModal} showModal={showModal} />}
      {showPreviewModal && <PreviewModal setShowPreviewModal={setShowPreviewModal} answers={answers} showPreviewModal={showPreviewModal} />}
      
      <Transition.Root show={showResetModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setShowResetModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Reset Conversation
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to reset the conversation? All your answers will be lost and cannot be recovered.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#66B032] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1B3409] sm:ml-3 sm:w-auto"
                      onClick={handleResetConversation}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setShowResetModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default Chatbot;
