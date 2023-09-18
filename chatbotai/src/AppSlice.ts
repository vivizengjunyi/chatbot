import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './app/store';

interface AppState {
    errorMessage: string | null,
}
const initialState: AppState = {
    errorMessage: null,
}

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
    setError: (state, action: PayloadAction<AppState["errorMessage"]>) => {
        state.errorMessage = action.payload;
    },
   }
})
export const { setError } = appSlice.actions;
export const selectError = (state: RootState) => state.appReducer.errorMessage;

export default appSlice.reducer;