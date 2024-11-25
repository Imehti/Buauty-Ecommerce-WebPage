import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "@/pages/AllProducts";
import LoginPage from "@/components/auth/LoginPage";
import HomePage from "@/components/HomePage";
import RegisterPage from "@/components/auth/RegisterPage";
import AboutPage from "@/components/AboutPage";
import BlogPage from "@/components/Blog";
import ProductsPage from "@/components/Products";
import Opinions from "@/components/OpinionSection";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/allProducts" element={<AllProducts />} />
      {/* Include About and Blog as part of HomePage or another component */}
      <Route path="/" element={<HomeWithAboutAndBlog />} />
    </Routes>
  );
};

const HomeWithAboutAndBlog = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <BlogPage />
      <ProductsPage />
      <Opinions />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AppRoutes;
