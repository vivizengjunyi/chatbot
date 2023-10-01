import React, { useState, useMemo, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setAnswersArray, answersArray} from "./ChatbotSlice";
import { questions, Question } from "../../questions";
import { getEditInput } from "./AnswerType";
import { setError } from "../../AppSlice";
import Modal from "./Modal";
import styles from "./Chatbot.module.css";
import { SiProbot } from "react-icons/si";
import { PiPencilBold } from "react-icons/pi";

const Chatbot = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [editingAnswer, setEditingAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [questionIndexInModal, setQuestionIndexInModal] = useState<number>(-1);
  const answers = useAppSelector(answersArray);
  const dispatch = useAppDispatch();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const displayQuestions: Question[] | undefined = useMemo(() => {
    if (!questions) return;
    const result: Question[] = [];
    if (answers) {
      answers.forEach((answer) => {
        const questionConfig = questions.find(
          (item) => item.id === answer.id
        ) as Question;
        if (questionConfig) {
          result.push({ ...answer, ...questionConfig });
        }
      });
    } else {
      const questionTime = new Date();
      questions[0].questionTimestamp = questionTime;
      result.push(questions[0]);
    }
    const { nextQuestion } = questions[currentQuestionIndex];
    if (nextQuestion?.length === 1 && nextQuestion[0]?.value === null) {
      const nextQuestionId: number = nextQuestion[0]?.id;
      const nextQuestionConfig: Question | undefined = questions.find(
        (item) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        const questionTime = new Date();
        nextQuestionConfig.questionTimestamp = questionTime;
        result.push(nextQuestionConfig);
      }
      setEditingAnswer("");
    } else {
      const nextQuestionId: number | undefined = nextQuestion?.find(
        (item) => item.value === editingAnswer
      )?.id;
      setEditingAnswer("");
      const nextQuestionConfig: Question | undefined = questions.find(
        (item) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        const questionTime = new Date();
        nextQuestionConfig.questionTimestamp = questionTime;
        result.push(nextQuestionConfig);
      }
    }
    console.log(result);
    return result;
  }, [answers, currentQuestionIndex]);
  useEffect(scrollToBottom, [displayQuestions]);
  const handleAnswer = () => {
    if (!editingAnswer) {
      dispatch(setError("Please enter your answer"));
      return;
    };
    dispatch(
      setAnswersArray({answerObj: {
        id: displayQuestions?.[currentQuestionIndex].id,
        answer: editingAnswer,
        questionTimestamp:
          displayQuestions?.[currentQuestionIndex].questionTimestamp,
        answerTimestamp: new Date(),
      }, fromModal: false})
    );
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
  return (
    <div className="flex flex-col items-center">
      <div>
        <div>Header</div>
        <div>Conversation</div>
      </div>
      <div className="border-0 w-10/12 flex flex-col shadow-md divide-y-4 divide-[#cbd5e1] rounded">
        {/* chatbot conversation */}
        <ul className="flex flex-col space-y-5 px-1.5 py-2.5 h-96 overflow-y-scroll">
          {displayQuestions &&
            displayQuestions.map((item, i, items) => {
              const { answer, questionTimestamp, answerTimestamp } = item;
              return (
                <React.Fragment key={i}>
                  <li
                    className={`flex flex-col justify-start gap-y-0.5 ${
                      i === items.length - 1 ? styles.slow : ""
                    }`}
                    key={i + "b"}
                  >
                    <div>
                      <div className="flex flex-row gap-x-1.5">
                        <SiProbot className="w-8 h-8 fill-cyan-500" />
                        <div className="bg-[#1da1f2] text-[#f1f5f9] px-2 py-1.5 rounded-sm">
                          {item.question}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs">{timeLocalizer(questionTimestamp)}</div>
                    <div ref={messagesEndRef} />
                  </li>
                  {i < items.length - 1 && (
                    <li className="flex flex-col gap-y-0.5" key={i + "a"}>
                      <div className="flex flex-row justify-end items-center gap-x-0.5">
                        <span className="bg-indigo-600 text-[#f1f5f9] px-2 py-1.5">
                          {answer}
                        </span>
                        <PiPencilBold className="w-5 h-5 fill-cyan-500" onClick={() => {
                          setEditingAnswer(answer);
                          setShowModal(true);
                          setQuestionIndexInModal(i);
                          }}/>
                      </div>
                      <div className="flex justify-end text-xs">{timeLocalizer(answerTimestamp)}</div>
                      <div ref={messagesEndRef} />
                    </li>
                  )}
                </React.Fragment>
              );
            })}
        </ul>

        {/* submit answer */}
        <div className="px-4 border-top d-none d-md-block">
          <div>
            <div className="row h-100 p-2 w-100 p-lg-3 d-flex flex-row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                {displayQuestions &&
                  getEditInput(
                    displayQuestions[currentQuestionIndex],
                    editingAnswer,
                    handleStateEditingAnswer,
                    handleAnswer
                  )}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <button
                  className="btn btn-primary"
                  style={{ margin: "10px" }}
                  onClick={handleAnswer}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        showModal && <Modal questionIndexInModal={questionIndexInModal} displayQuestions={displayQuestions} handleStateShowModal={handleStateShowModal} editingAnswer={editingAnswer}/>
      }
    </div>
  );
};
export default Chatbot;
