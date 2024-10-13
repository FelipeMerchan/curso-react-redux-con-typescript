import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/Navbar/Navbar";

/* 
  Outlet: https://reactrouter.com/en/main/components/outlet#outlet
El componente Outlet es una configuración necesaria para
que los children que les definimos en el router a LayoutMain se rendericen:
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> }, -> Outlet permite que se renderice
      { path: "/cart", element: <Cart /> }, -> Outlet permite que se renderice
    ],
  },
]);

*/
export const LayoutMain = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
