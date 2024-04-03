import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {getAnswersFromLocalStorage, setAnswersToLocalStorage} from "../../localStorage";
import { Question } from "../../questions";

export interface Answer {
  id: Question["id"] | undefined;
  answer: string | undefined;
  questionTimestamp?: Date | string;
  answerTimestamp: Date | string;
}

const answersFromLocalStorage = getAnswersFromLocalStorage();

export interface ActionPayload {
  answerObj: Answer,
  fromModal: boolean,
}

export interface AnswerState {
  answers: Answer[];
}

const initialState: AnswerState = {
  answers: answersFromLocalStorage || [],
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    setAnswersArray: (state, action: PayloadAction<ActionPayload>) => {
      if (!action.payload.fromModal) {
        state.answers = [...state.answers, action.payload.answerObj];
        setAnswersToLocalStorage(state.answers);
        return;
      } else {
        const findMatch: Answer | undefined = state.answers.find(item => item.id === action.payload.answerObj.id);
        if (findMatch) {
           findMatch.answer = action.payload.answerObj.answer;
            findMatch.answerTimestamp = action.payload.answerObj.answerTimestamp;
        }else {
          return;
        }
        setAnswersToLocalStorage(state.answers);
      }
    },
    resetConversation: (state) => {
      state.answers = [];
      setAnswersToLocalStorage(state.answers);
    }
  },
});
export const { setAnswersArray, resetConversation } = chatbotSlice.actions;
export const answersArray = (state: RootState) => state.chatbotReducer.answers;

export default chatbotSlice.reducer;
