import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AuthorQuiz testProp={"hello"} />,
  document.getElementById("root")
);

serviceWorker.unregister();
