import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage, { NotFound } from "../pages/ErrorPage";
import Home from "../pages/Home";

function restoreRedirect() {
  try {
    const redirect = sessionStorage.getItem("spa-redirect");
    if (redirect?.startsWith("/")) {
      sessionStorage.removeItem("spa-redirect");
      window.history.replaceState(null, "", redirect);
    }
  } catch {
    // Storage can be unavailable in private modes; keep the current location.
  }
}

restoreRedirect();

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
