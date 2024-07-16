import "./tailwind.css";
import App from "./App";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
