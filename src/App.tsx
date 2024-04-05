import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import SignIn from "./features/signIn/SignIn";
import Home from "./features/home/Home";
import NotFound from "./features/notFound/NotFound";
import Chatbot from "./features/chatbot/Chatbot";
import { useAppSelector } from "./app/hooks";
import { setError } from "./AppSlice";
import logo from './image/chabot.png';


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
    <div className="w-full h-[100vh] flex flex-col justify-self-center bg-[#EBF7E3]">
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
      <div className="flex items-center bg-[#EBF7E3] p-4 shadow-md">
        <img src={logo} alt="chatbot logo" className="h-20 w-20 mr-4" />
        <h1 className="text-3xl font-bold text-[#1B3409]">Chatbot AI - React, Redux, TypeScript & Tailwind CSS project</h1>
      </div>

      <Router basename="/chat">
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
