import { useState, useRef, useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Answer } from "./ChatbotSlice";
interface PreviewModalPros {
    setShowPreviewModal: any;
    answers: Answer[];
    showPreviewModal: boolean;
}
export default function PreviewModal({ setShowPreviewModal, answers, showPreviewModal }: PreviewModalPros) {
    const [workExperience, setWorkExperience] = useState<Array<number | string>>([]);
    const [education, setEducation] = useState<Array<number | string>>([]);
    const cancelButtonRef = useRef(null);
    const workExperienceIds = [19, 20, 21, 22, 23, 24];
    const educationIds = [26, 27, 28, 29, 30];
    useEffect(() => {
        if (answers.length > 0) {
            answers.forEach((answer: Answer) => {
                if (typeof answer.id !== 'undefined') {
                    const answerId = typeof answer.id === 'number' ? answer.id : parseInt(answer.id.split(':')[0]);

                    const findMatchWorkExperience = workExperienceIds.find(id => id === answerId);
                    if (findMatchWorkExperience && !workExperience.includes(answer.id)) {
                        setWorkExperience([...workExperience, answer.id as number | string]);
                    }
                    const findMatchEducation = educationIds.find(id => id === answerId);
                    if (findMatchEducation && !education.includes(answer.id)) {
                        setEducation([...education, answer.id as number | string]);
                    }
                }
            });
        }
    }, [answers, workExperience, education]);
    const groupIds = (ids: Array<number | string>): (number | string)[][] => {
        const processedIds = ids.map(id => typeof id === 'number' ? `${id}:0` : id);
        const result: (number | string)[][] = [];
        const uniqueGroups = new Set(processedIds.map(id => parseInt(id.split(":")[1])));
        uniqueGroups.forEach(groupNumber => {
            const group = processedIds.filter(id => parseInt(id.split(":")[1]) === groupNumber);
            const sortedGroup = group.sort((a, b) => {
                const firstId = parseInt(a.split(":")[0]);
                const secondId = parseInt(b.split(":")[0]);
                return firstId - secondId;
            })
            if (sortedGroup.length > 0) {
                result.push(sortedGroup);
            }
        });
        return result.reverse();
    }
    const workExperienceQuestions = groupIds(workExperience);
    const educationQuestions = groupIds(education);
    console.log("workExperienceQuestions", workExperienceQuestions);
    console.log("educationQuestions", educationQuestions);
    const getValue = (id: string | number) => {
        let processId: string | number;
        if (typeof id === "string" && id.includes(':0')) {
            processId = parseInt(id.split(':')[0]);
        } else {
            processId = id;
        }
        return answers.find((answer) => answer.id === processId)?.answer || "";
    }
    const cityQuestionIds: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const city = answers.find(answer => cityQuestionIds.includes(answer.id as number))?.answer || "";
    const phoneNumber = answers.find((answer) => answer.id === 16)?.answer || "";
    const professionalSummary = answers.find((answer) => answer.id === 17)?.answer || "";
    return (
        <Transition.Root show={showPreviewModal} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={() => setShowPreviewModal(false)}
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
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
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
                            <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg overflow-auto">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <form>
                                                <div className="space-y-12">
                                                    {/* personal info */}
                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <h2 className="text-base font-semibold leading-7 text-gray-900 underline decoration-blue-500">Personal Information</h2>

                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    First name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="first-name"
                                                                        id="first-name"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={answers.find((answer) => answer.id === 1)?.answer || ""}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Last name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="last-name"
                                                                        id="last-name"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={answers.find((answer) => answer.id === 2)?.answer || ""}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-2">
                                                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Gender
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="gender"
                                                                        id="gender"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={answers.find((answer) => answer.id === 3)?.answer || ""}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-4">
                                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Email address
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={answers.find((answer) => answer.id === 4)?.answer || ""}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Province
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="province"
                                                                        id="province"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={answers.find((answer) => answer.id === 5)?.answer || ""}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    City
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="city"
                                                                        id="city"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={city}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Phone number
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        type="text"
                                                                        name="phone"
                                                                        id="phone"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                        readOnly
                                                                        value={phoneNumber}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-full">
                                                                <label htmlFor="professional summary" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Professional Summary
                                                                </label>
                                                                <div className="mt-2">
                                                                    <textarea rows={Number(4)} name="professional summary" id="professional summary" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" readOnly>{professionalSummary}</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* work experience */}
                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <h2 className="text-base font-semibold leading-7 text-gray-900 underline decoration-blue-500">Work Experience</h2>
                                                        {workExperienceQuestions.map((group, index) => {
                                                            const getAnswers: (string | number)[] = group.map((id) => getValue(id));
                                                            console.log("!!!!!!!!!getAnswers", getAnswers);
                                                            return (
                                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" key={index}>
                                                                    <div className="sm:col-span-full text-sm font-semibold leading-7 text-gray-900">Work Experience {index + 1}</div>
                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="job title" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Job title
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="job title"
                                                                                id="job title"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[0]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="employer" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Employer
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="employer"
                                                                                id="employer"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[1]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-full">
                                                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Location
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="location"
                                                                                id="location"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[2]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="start time" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Start date
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                id="start time"
                                                                                name="start time"
                                                                                type="start time"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[3]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="end date" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            End date
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="end date"
                                                                                id="end date"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[4]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-full">
                                                                        <label htmlFor="job description" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Job description
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <textarea rows={Number(4)} name="job description" id="job description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" readOnly value={getAnswers[5]}></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )

                                                        })}
                                                    </div>
                                                    {/* Education */}
                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <h2 className="text-base font-semibold leading-7 text-gray-900 underline decoration-blue-500">Education</h2>
                                                        {educationQuestions.map((group, index) => {
                                                            const getAnswers: (string | number)[] = group.map((id) => getValue(id));
                                                            console.log("getAnswers", getAnswers);
                                                            return (
                                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" key={index}>
                                                                    <div className="sm:col-span-full text-sm font-semibold leading-7 text-gray-900">Education {index + 1}</div>
                                                                    <div className="sm:col-span-full">
                                                                        <label htmlFor="institution name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Institution name
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="institution name"
                                                                                id="institution name"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[0]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-full">
                                                                        <label htmlFor="location of institution" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Location of institution
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="location of institution"
                                                                                id="location of institution"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[1]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Degree
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                id="degree"
                                                                                name="degree"
                                                                                type="start time"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[2]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="field of study" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Field of study
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="field of study"
                                                                                id="field of study"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[3]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="sm:col-span-3">
                                                                        <label htmlFor="graduation date" className="block text-sm font-medium leading-6 text-gray-900">
                                                                            Graduation date
                                                                        </label>
                                                                        <div className="mt-2">
                                                                            <input
                                                                                type="text"
                                                                                name="graduation date"
                                                                                id="graduation date"
                                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 py-2"
                                                                                readOnly
                                                                                value={getAnswers[4]}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setShowPreviewModal(false)}>
                                                        Close
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}