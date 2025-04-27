import { setError } from "../../AppSlice";

export const validateAnswer = (answer: string, answerType: string, dispatch: any): boolean => {
    if (!answer) {
      dispatch(setError("Please enter your answer"));
      return false;
    }

    switch (answerType) {
      case "email": {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(answer)) {
          dispatch(setError("Please enter a valid email address"));
          return false;
        }
        break;
      }
      case "phone": {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(answer)) {
          dispatch(setError("Please enter a valid phone number in the format XXX-XXX-XXXX"));
          return false;
        }
        break;
      }
    }
    return true;
  };
