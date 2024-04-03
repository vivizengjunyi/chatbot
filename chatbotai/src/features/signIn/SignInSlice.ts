import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { postSignInData, User, SignInResponse } from './SignInAPI';
import { RootState } from '../../app/store';

export interface SignInState {
  username: string | '';
}

const initialState: SignInState = {
  username: '',
};


const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signInUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    }
    
  },
});
export const { signInUsername } = signInSlice.actions;
export const signedUsername = (state: RootState) => state.signInReducer.username;

export default signInSlice.reducer;
