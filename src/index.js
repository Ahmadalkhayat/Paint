import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Component/App";
const webapplication=document.querySelector('#root');
const root=createRoot(webapplication);
root.render( <App />  );