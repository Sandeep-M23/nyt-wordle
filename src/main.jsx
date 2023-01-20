import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextWrapper from "./contexts/themeContextWrapper";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContextWrapper>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeContextWrapper>
);
