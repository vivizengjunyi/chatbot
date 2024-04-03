import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Question } from "../../questions";
import { getEditInput } from "./AnswerType";
import { useAppDispatch } from "../../app/hooks";
import { setAnswersArray } from "./ChatbotSlice";
import { setError } from "../../AppSlice";
interface ModalProps {
  questionIndexInModal: number;
  displayQuestions: Question[] | undefined;
  handleStateShowModal: any;
}
export default function Modal({
  questionIndexInModal,
  displayQuestions,
  handleStateShowModal
}: ModalProps) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const questionObj: Question | undefined =
    displayQuestions && displayQuestions[questionIndexInModal];
  const [editingAnswerByModal, setEditingAnswerByModal] = useState<any>(questionObj?.answer);
  const handleAnswerByModal = () => {
    if (!editingAnswerByModal) {
      dispatch(setError("Please enter your answer"));
      return;
    }
    // validate email
    if (questionObj?.answerType === "email") {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!regex.test(editingAnswerByModal)) {
        dispatch(
          setError("Please enter a valid email address")
        );
        return;
      }
    }
    // update redux store
    const id: Question["id"] | undefined = questionObj?.id;
    dispatch(
      setAnswersArray({
        answerObj: { id, answer: editingAnswerByModal, answerTimestamp: new Date().toISOString() },
        fromModal: true,
      })
    );
    setEditingAnswerByModal("");
    handleStateShowModal(false);
  };
  const handleStateEditingAnswerByModal = (value: any) => {
    setEditingAnswerByModal(value);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
                        {questionObj && questionObj.question}
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500">
                          {getEditInput(
                            questionObj,
                            editingAnswerByModal,
                            handleStateEditingAnswerByModal,
                            handleAnswerByModal
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      setOpen(false);
                      handleAnswerByModal();
                    }}
                  >
                    confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => { setOpen(false); handleStateShowModal(false); }}
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
}
