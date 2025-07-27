import React, { type JSX } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import Home from "./ui/HomeV1";
// import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

/*TODO:
Lazy Loading for Performance Optimization
As the app scales, consider React.lazy() + Suspense for code splitting:
const Menu = React.lazy(() => import("./features/menu/Menu"));
And wrap your routes like:
element: (
  <Suspense fallback={<Spinner />}>
    <Menu />
  </Suspense>
)
This reduces your initial JS bundle size, improving performance.
*/


const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() : JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
