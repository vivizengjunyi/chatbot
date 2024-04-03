import { Answer } from "./features/chatbot/ChatbotSlice";

export const setAnswersToLocalStorage = (answers: Answer[]) => {
    localStorage.setItem("answers", JSON.stringify(answers))
}
 
export const getAnswersFromLocalStorage = () => {
    const answers = localStorage.getItem("answers");
    return answers? JSON.parse(answers) : [];
}