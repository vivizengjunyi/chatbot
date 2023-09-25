import React, { useState, useMemo, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setAnswersArray, answersArray, Answer } from "./ChatbotSlice";
import { questions, Question } from "../../questions";
import { getEditInput } from "../answerType/AnswerType";
import styles from "./Chatbot.module.css";
import {SiProbot} from "react-icons/si";

const Chatbot = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [editingAnswer, setEditingAnswer] = useState("");
  const [questionTimestamp, setQuestionTimestamp] = useState<
    string | undefined
  >();
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
      result.push(questions[0]);
    }
    const { nextQuestion } = questions[currentQuestionIndex];
    if (nextQuestion?.length === 1 && nextQuestion[0]?.value === null) {
      const nextQuestionId: number = nextQuestion[0]?.id;
      const nextQuestionConfig: Question | undefined = questions.find(
        (item) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        result.push(nextQuestionConfig);
      }
    } else {
      const nextQuestionId: number | undefined = nextQuestion?.find(
        (item) => item.value === editingAnswer
      )?.id;
      const nextQuestionConfig: Question | undefined = questions.find(
        (item) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        result.push(nextQuestionConfig);
      }
    }
    console.log(result);
    return result;
  }, [answers, currentQuestionIndex, editingAnswer]);
  useEffect(scrollToBottom, [displayQuestions]);
  const handleAnswer = () => {
    if (!editingAnswer) return;
    dispatch(
      setAnswersArray({
        id: displayQuestions?.[currentQuestionIndex].id,
        answer: editingAnswer,
      })
    );
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
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
                const { answer } = item;
                return (
                  <React.Fragment key={i}>
                    <li
                      className={`flex justify-start ${i === items.length -1 ? styles.slow : ""}`}
                      key={i}
                    >
                      <div>
                        <div className="flex flex-row gap-x-1.5">
                        <SiProbot className="w-8 h-8 fill-cyan-500"/>
                        <div className="bg-[#1da1f2] text-[#f1f5f9] px-2 py-1.5 rounded-sm">{item.question}</div>
                        </div>
                      </div>
                      <div ref={messagesEndRef} />
                    </li>
                    {i < items.length - 1 && (
                      <li
                        className="flex justify-end"
                        key={i + "a"}
                      >
                        <div className="message-flex-row">
                          <div className="bg-indigo-600 text-[#f1f5f9] px-2 py-1.5 rounded-sm">{answer}</div>
                        </div>
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
                    false,
                    editingAnswer,
                    setEditingAnswer,
                    () => handleAnswer()
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
    </div>
  );
};
export default Chatbot;
