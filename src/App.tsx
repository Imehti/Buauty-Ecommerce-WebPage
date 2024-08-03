import AboutPage from "./components/AboutPage";
import BlogPage from "./components/Blog";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Opinions from "./components/OpinionSection";
import ProductsPage from "./components/Products";
import TeamSection from "./components/Team";

const App = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <BlogPage />
      <ProductsPage />
      <Opinions />
      <TeamSection />
      <Footer />
    </>
  );
};

export default App;
