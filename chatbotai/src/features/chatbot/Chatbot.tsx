import React, { useState, useMemo, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setAnswersArray, answersArray } from "./ChatbotSlice";
import { questions, Question } from "../../questions";
import { getEditInput } from "../answerType/AnswerType";

export default function Chatbot() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [editingAnswer, setEditingAnswer] = useState<any>("");
  const answers = useAppSelector(answersArray);
  const dispatch = useAppDispatch();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const displayQuestions: Question[] | undefined = useMemo(() => {
    if (!questions) return;
    const result: Question[] = [];
    result.push(questions[0]);
    const { nextQuestion } = questions[currentQuestionIndex];
    if (nextQuestion?.length === 1 && nextQuestion[0]?.value === null) {
      const nextQuestionId = nextQuestion[0]?.id;
      const nextQuestionConfig = questions.find(
        (item, index) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        result.push(nextQuestionConfig);
      }
    } else {
      const nextQuestionId = nextQuestion?.find(
        (item, index) => item.value === editingAnswer
      )?.id;
      const nextQuestionConfig = questions.find(
        (item) => item.id === nextQuestionId
      );
      if (nextQuestionConfig) {
        result.push(nextQuestionConfig);
      }
    }
    console.log(result);
    return result;
  }, [editingAnswer, currentQuestionIndex]);
  useEffect(scrollToBottom, [displayQuestions]);
  return (
    <div>
      <div>
        <div>Header</div>
        <div>Conversation</div>
      </div>
      <div>
        {/* Display conversation */}
        <ul>
          {displayQuestions &&
            displayQuestions.map((item, i, items) => {
              return (
                <>
                  <li key={i} className="message">
                    <div>
                      <div className="message-robot">{item.question}</div>
                    </div>
                    {/* <div className="time">{formatTime(askedOnTs)}</div> */}
                    <div ref={messagesEndRef} />
                  </li>
                  {i < items.length - 1 && (
                    <li
                      key={i + "a"}
                      className="message message-right message-right-margin"
                    >
                      <div className="message-flex-row">
                        <div>Answer</div>
                      </div>
                      <div className="time">
                        {/* {formatTime(answeredOnTs)} */}
                      </div>
                      <div ref={messagesEndRef} />
                    </li>
                  )}
                </>
              );
            })}
        </ul>
      </div>
      {/* Display question type and submit answer */}
      <div className="px-4 border-top d-none d-md-block">
        <div>
          <div className="row h-100 p-2 w-100 p-lg-3 d-flex flex-row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              {displayQuestions &&
                getEditInput(
                  displayQuestions[currentQuestionIndex],
                  false,
                  editingAnswer,
                  setEditingAnswer
                )}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <button
                className="btn btn-primary"
                style={{ margin: "10px" }}
                onClick={() => {
                  // handleAnswer();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
