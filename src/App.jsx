import React from "react";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} /> 
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
