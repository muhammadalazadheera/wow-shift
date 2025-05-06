import {RouterProvider} from "react-router";
import { createRoot } from 'react-dom/client'
import '../src/assets/css/style.css'
import router from "./routes/routes.jsx";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
