import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import signInReducer from '../features/signIn/SignInSlice';
import appReducer from '../AppSlice';
import chatbotReducer from '../features/chatbot/ChatbotSlice';

export const store = configureStore({
  reducer: {
    signInReducer,
    appReducer,
    chatbotReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
