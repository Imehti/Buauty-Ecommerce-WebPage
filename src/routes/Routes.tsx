import LoadingSpinner from "@/components/LoadingSpinner";
import ProductDetails from "@/pages/ProductDetailsPage";
import { lazy, Suspense } from "react";
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
const Cart = lazy(() => import("@/components/Cart"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<ProfilePage />} />
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