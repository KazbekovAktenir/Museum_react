import React from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import Visit from "../pages/Visit";
import ExhibitPage from "../pages/ExhibitPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/exhibitions", element: <ExhibitPage /> },

    { id: 3, link: "/visit", element: <Visit /> },
    { id: 4, link: "/contacts", element: <ContactPage /> },
    { id: 5, link: "/admin", element: <AdminPage /> },
    // { id: 6, link: "/editProduct/:id", element: <EditExhibit /> },
    // { id: 7, link: "/cart", element: <CartPage /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
    //   <Routes>
    //     <Route />
    //   </Routes>
  );
};

export default MainRoutes;
