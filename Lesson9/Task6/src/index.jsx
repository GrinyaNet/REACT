import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './Game';


const rootElement = document.querySelector('#root');

ReactDOM.render(<Game />, rootElement);


// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );