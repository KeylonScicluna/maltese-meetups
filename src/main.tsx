import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import DebugProfiles from "./DebugProfiles"
import "./index.css"

const root = createRoot(document.getElementById("root")!)

const path = window.location.pathname
if (path === "/debug/profiles" || path.startsWith("/debug/profiles/")) {
  root.render(
    <React.StrictMode>
      <DebugProfiles />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
