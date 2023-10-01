import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Answer {
  id: number | undefined;
  answer: string | undefined;
  questionTimestamp?: Date | string;
  answerTimestamp: Date | string;
}

export interface ActionPayload {
  answerObj: Answer,
  fromModal: boolean,
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
    setAnswersArray: (state, action: PayloadAction<ActionPayload>) => {
      if (!action.payload.fromModal) {
        state.answers = [...state.answers, action.payload.answerObj];
        return;
      } else {
        const findMatch: Answer | undefined = state.answers.find(item => item.id === action.payload.answerObj.id);
        if (findMatch) {
           findMatch.answer = action.payload.answerObj.answer;
            findMatch.answerTimestamp = action.payload.answerObj.answerTimestamp;
        }else {
          return;
        }
      }
    },
  },
});
export const { setAnswersArray } = chatbotSlice.actions;
export const answersArray = (state: RootState) => state.chatbotReducer.answers;

export default chatbotSlice.reducer;
