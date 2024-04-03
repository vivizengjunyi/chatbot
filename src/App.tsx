import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import SignIn from "./features/signIn/SignIn";
import Home from "./features/home/Home";
import NotFound from "./features/notFound/NotFound";
import Chatbot from "./features/chatbot/Chatbot";
import { useAppSelector } from "./app/hooks";
import { setError } from "./AppSlice";


function App() {
  const errorMessage = useAppSelector((state) => state.appReducer.errorMessage);
  const [toast, setToast] = React.useState<String | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (errorMessage !== null) {
      setToast(errorMessage);
      dispatch(setError(null));
    }
    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  return (
    <div className="w-full h-[100vh]">
      <div
        id="toast-container"
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4"
      >
        <div
          className={
            toast === null
              ? "text-gray-200 p-4 rounded"
              : "bg-red-700 text-gray-200 p-4 rounded"
          }
        >
          {toast}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 ml-2 pt-5 text-center">Chatbot AI -  React, Redux and TypeScript project</h1>
      <Router basename="/chatbotai">
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn}></Route> */}
          <Route exact path="/" component={Chatbot}></Route>
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
