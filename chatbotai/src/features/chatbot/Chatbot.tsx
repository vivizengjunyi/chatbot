import React, { useState, useMemo, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setAnswersArray, answersArray, Answer, resetConversation } from "./ChatbotSlice";
import { questions, Question } from "../../questions";
import { getEditInput } from "./AnswerType";
import { setError } from "../../AppSlice";
import Modal from "./EditModal";
import ChatbotFeatures from "./ChatbotFeatures";
import PreviewModal from "./PreviewModal";
import styles from "./Chatbot.module.css";
import { SiProbot } from "react-icons/si";
import { PiPencilBold } from "react-icons/pi";

const Chatbot = () => {
  const [editingAnswer, setEditingAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [questionIndexInModal, setQuestionIndexInModal] = useState<number>(-1);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const answers = useAppSelector(answersArray);
  const dispatch = useAppDispatch();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // console.log('answers', answers);
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
        let nextQuestionInfo = questions.find(q => q.id === currentQuestionId)?.nextQuestion;
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
    if (!editingAnswer) {
      dispatch(setError("Please enter your answer"));
      return;
    };
    const currentQuestion = displayQuestions?.[displayQuestions.length - 1] as Question;
    const { answerType } = currentQuestion;
    // validate email
    if (answerType === "email") {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!regex.test(editingAnswer)) {
        dispatch(
          setError("Please enter a valid email address")
        );
        return;
      }
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
  const handleStateShowModal = (value: boolean) => {
    setShowModal(value);
  }
  const handleResetConversation = () => {
    dispatch(resetConversation());
    setEditingAnswer("");
  }
  console.log('displayQuestions', displayQuestions)
  const showEndMessage = displayQuestions && (displayQuestions[displayQuestions.length - 1]?.nextQuestion?.find(obj => obj.value === displayQuestions[displayQuestions.length - 1]?.answer && obj.id === null) ? true : false);
  return (
    <div className="flex justify-between items-center h-screen px-4">
      <ChatbotFeatures />
      <div className="bg-white w-2/5 shadow-md rounded-lg">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Chatbot AI</span>
          <div className="group relative flex items-center justify-center">
            <svg className="h-6 w-6 text-red-500 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => handleResetConversation()}>
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            <span className="absolute left-full bottom-0 ml-2 px-2 py-1 bg-blue-500 text-sm text-white rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
              Reset
            </span>
          </div>
        </div>
        <div className="overflow-y-auto h-[500px]">
          {/* Messages */}
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
                          <SiProbot className="fill-cyan-500 h-[30px] w-[30px] self-center" />
                          <div className="bg-[#1da1f2] text-[#f1f5f9] px-2 py-1.5 rounded-sm">
                            {question}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs">{timeLocalizer(questionTimestamp)}</div>
                      <div ref={messagesEndRef} />
                    </li>
                    {(i < displayQuestions.length - 1 || (i === displayQuestions.length - 1 && showEndMessage)) && <li className="flex flex-col gap-y-0.5" key={i + "a"}>
                      <div className="flex flex-row justify-end items-center gap-x-0.5">
                        <span className="bg-indigo-600 text-[#f1f5f9] px-2 py-1.5">
                          {answer}
                        </span>
                        <PiPencilBold className="w-5 h-5 fill-cyan-500" onClick={() => {
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
                  <SiProbot className="h-[30px] w-[30px] fill-cyan-500 self-center" />
                  <div className="bg-[#1da1f2] text-[#f1f5f9] px-2 py-1.5 rounded-sm">
                    You have reached the end question. Thank you for your time.
                  </div>
                </div>
              </div>
              <div ref={messagesEndRef} />
            </li>}
          </ul>
        </div>
        <div className="px-4 py-3 border-t bg-gray-50">
          {/* Input area */}
          {!showEndMessage &&
            <div className="flex items-center space-x-2">
              {displayQuestions &&
                getEditInput(
                  displayQuestions[displayQuestions.length - 1],
                  editingAnswer,
                  handleStateEditingAnswer,
                  handleAnswer
                )}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200" onClick={() => handleAnswer()}>
                Send
              </button>
            </div>}
        </div>
      </div>
      {showModal && <Modal questionIndexInModal={questionIndexInModal} displayQuestions={displayQuestions} handleStateShowModal={handleStateShowModal} />}
      <div className="flex justify-center w-1/5">
        <button
          disabled={showEndMessage}
          onClick={() => setShowPreviewModal(true)}
          type="button"
          value="Preview"
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Preview
        </button>
      </div>
      {showPreviewModal && <PreviewModal />}
    </div>
  );
};
export default Chatbot;
