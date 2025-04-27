import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Question } from "../../questions";
import { getEditInput } from "./AnswerType";
import { useAppDispatch } from "../../app/hooks";
import { setAnswersArray, Answer } from "./ChatbotSlice";
import { setError } from "../../AppSlice";
import { validateAnswer } from "./utils";

interface ModalProps {
  questionIndexInModal: number;
  displayQuestions: Question[] | undefined;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({
  questionIndexInModal,
  displayQuestions,
  setShowModal,
  showModal,
}): JSX.Element => {
  const cancelButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const [editingAnswerByModal, setEditingAnswerByModal] = useState("");
  
  useEffect(() => {
    if (displayQuestions && questionIndexInModal >= 0) {
      setEditingAnswerByModal(displayQuestions[questionIndexInModal].answer || "");
    }
  }, [displayQuestions, questionIndexInModal]);

  const handleSubmit = () => {
    if (!displayQuestions || questionIndexInModal < 0) return;

    const questionObj = displayQuestions[questionIndexInModal];
    if (!validateAnswer(editingAnswerByModal, questionObj.answerType, dispatch)) {
      return;
    }

    dispatch(
      setAnswersArray({
        answerObj: {
          id: questionObj.id,
          answer: editingAnswerByModal,
          questionTimestamp: typeof questionObj.questionTimestamp === 'string' ? questionObj.questionTimestamp : questionObj.questionTimestamp.toISOString(),
          answerTimestamp: new Date().toISOString(),
        }, fromModal: true
      })
    );
    setShowModal(false);
  };

  const handleStateEditingAnswerByModal = (value: any) => {
    setEditingAnswerByModal(value);
  };

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowModal}
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
                        {displayQuestions && displayQuestions[questionIndexInModal] && displayQuestions[questionIndexInModal].question}
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500">
                          {getEditInput(
                            displayQuestions && displayQuestions[questionIndexInModal],
                            editingAnswerByModal,
                            handleStateEditingAnswerByModal,
                            handleSubmit
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#66B032] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1B3409] sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShowModal(false)}
                    ref={cancelButtonRef}
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
  );
};

export default Modal;
