import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./features/signIn/SignIn";
import Home from "./features/home/Home";
import NotFound from "./features/notFound/NotFound";
import Chatbot from "./features/chatbot/Chatbot";
import { useAppSelector, useAppDispatch } from "./app/hooks";

function App() {
  const errorMessage = useAppSelector((state) => state.appReducer.errorMessage);
  const [toast, setToast] = React.useState<String | null>(null);
  useEffect(() => {
    if (errorMessage !== null) {
      setToast(errorMessage);
    }
    const timer = setTimeout(() => {
      setToast(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  return (
    <div className="App">
      <div
        id="toast-container"
        className="fixed inset-0 flex items-start justify-center pointer-events-none px-4 py-6 sm:p-6"
      >
        <div
          className={
            toast === null
              ? "text-[#f3f4f6] p-2 rounded"
              : "bg-[#9f1239] text-[#f3f4f6] p-2 rounded"
          }
        >
          {toast}
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn}></Route>
          <Route exact path="/chatbot" component={Chatbot}></Route>
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
