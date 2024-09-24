import Home from "../components/mainPage/home";
import { Homepage } from "../components/componentBody";
// import { NotFound, Error } from "../componentPage/secondaryComponent";
// import { Login, Register } from "../componentPage/Account";

export const router = [
  {
    element: <Home />,
    path: "/",
    children: [
      {
        element: <Homepage />,
        index: true,
      }
    ]
  },
//   {
//     element: <NotFound />,
//     path: "/*",
//   },
//   {
//     element: <Error />,
//     path: "/500",
//   },
];