import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/brand-page-using-react">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
