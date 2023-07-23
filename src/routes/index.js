import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateManagement from "../context";
import DashboardLayout from "../layouts/dashboard";
import FormEdit from "../pages/formedit";
import Pesanan from "../pages/Pesanan";
import TambahPesanan from "../pages/tambahPesanan";

const Router = () => {
  return (
    <BrowserRouter>
      <StateManagement>
        <Routes>
          <Route
            path="/"
            element={<DashboardLayout element={<Pesanan />} />}
          />
          <Route
            path="/tambah"
            element={<DashboardLayout element={<TambahPesanan />} />}
          />
          <Route
            path="/edit/:id"
            element={<FormEdit />}
          />
        </Routes>
      </StateManagement>
    </BrowserRouter>
  );
};

export default Router;
