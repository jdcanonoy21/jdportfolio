import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/theme-context";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
