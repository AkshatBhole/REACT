//main.jsx me se jayega index.html ke root me
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Make sure this is included!
import { BrowserRouter } from "react-router-dom";                //steps for ROUTER REACT DOM--> Main ke andar import karna hai BrowserRouter ko, phir App ke andar Routes aur Route ko import karna hai, aur finally Header ke andar Link ko import karna hai.

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
