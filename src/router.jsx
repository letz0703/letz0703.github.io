import {Navigate, createBrowserRouter} from "react-router-dom"
import {RootLayout} from "./layouts/RootLayout"
import {Home} from "./pages/Home"
//import {Redirect} from "./pages/Redirect"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "/0909", element: <Navigate to="wizbox.shop" />}
    ]
  }
])
