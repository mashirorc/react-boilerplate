import React from "react";
import ReactDOM from "react-dom/client";
import HelloMessage from "./components/HelloMessage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloMessage name="Randy" />);