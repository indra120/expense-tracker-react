import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "@/app.tsx"
import "@/index.css"
import 'react-toastify/ReactToastify.min.css'

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)