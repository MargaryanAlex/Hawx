import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.scss";
import "./i18n/i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import LoaderContext from "./context/loader-context";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <LoaderContext>

            <App/>
        </LoaderContext>
    </React.StrictMode>
=======

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
