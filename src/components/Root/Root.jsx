import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "~components/ProductPage/ProductPage";
import Layout from "~components/Layout/Layout";

function Root() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Root;
