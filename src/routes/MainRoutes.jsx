import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import Visit from "../pages/Visit";
import ExhibitPage from "../pages/ExhibitPage";
import EditExhibit from "../components/products/EditExhibit";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/exhibitions", element: <ExhibitPage /> },
    { id: 3, link: "/edit/:id", element: <EditExhibit /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    { id: 5, link: "/contacts", element: <ContactPage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    { id: 7, link: "/cart", element: <CartPage /> },
    { id: 8, link: "/visit", element: <Visit /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
