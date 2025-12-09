import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// virtual dom (entrypoint)
// entrypoint -> render -> load -> App's return value
// we will never touch dom manually

// DOM -> Its a tree

// App()
// <App />
