import LoadingSpinner from "@/components/LoadingSpinner";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AllProducts = lazy(() => import("@/pages/AllProducts"));
const LoginPage = lazy(() => import("@/components/auth/LoginPage"));
const HomePage = lazy(() => import("@/components/HomePage"));
const RegisterPage = lazy(() => import("@/components/auth/RegisterPage"));
const AboutPage = lazy(() => import("@/components/AboutPage"));
const BlogPage = lazy(() => import("@/components/Blog"));
const ProductsPage = lazy(() => import("@/components/Products"));
const Opinions = lazy(() => import("@/components/OpinionSection"));
const TeamSection = lazy(() => import("@/components/Team"));
const Footer = lazy(() => import("@/components/Footer"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        {/* Include About and Blog as part of HomePage or another component */}
        <Route path="/" element={<HomeWithAboutAndBlog />} />
      </Routes>
    </Suspense>
  );
};

const HomeWithAboutAndBlog = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <HomePage />
        <AboutPage />
        <BlogPage />
        <ProductsPage />
        <Opinions />
        <TeamSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default AppRoutes;