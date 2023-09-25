import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Answer {
  id: number | undefined;
  answer: string | undefined;
  questionTimestamp?: string | undefined;
  answerTimestamp?: any;
}

export interface AnswerState {
  answers: Answer[];
}

const initialState: AnswerState = {
  answers: [],
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    setAnswersArray: (state, action: PayloadAction<Answer>) => {
      state.answers = [...state.answers, action.payload];
    },
  },
});
export const { setAnswersArray } = chatbotSlice.actions;
export const answersArray = (state: RootState) => state.chatbotReducer.answers;

export default chatbotSlice.reducer;
