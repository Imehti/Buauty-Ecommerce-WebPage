import React, { useState } from "react";
import ProductCards from "../components/Product-cards";
import { Button } from "@/components/ui/button";
import useAllProducts from "@/hooks/useAllProducts";
import ProductCardSkeleton from "@/components/CardSkelteon";

const AllProducts = () => {
  const pageSize = 19; // Number of products per page
  const [page, setPage] = useState(1);

  const { data: allProducts, isLoading, isError } = useAllProducts();

  if (isLoading) return <ProductCardSkeleton />;
  if (isError) return <p>Error loading products.</p>;

  // Calculate the paginated products
  const totalPages = Math.ceil((allProducts?.length ?? 0) / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentProducts = allProducts?.slice(startIndex, startIndex + pageSize);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-10">
        <div className="flex justify-center mt-3">
          <h1 className="text-2xl font-mono">All Products</h1>
        </div>
        {currentProducts?.map((product) => (
          <ProductCards
            key={product.id}
            name={product.name}
            price={product.price}
            price_sign={product.price_sign}
            image_link={product.image_link}
            product_type={product.product_type}
          />
        ))}
        <div className="flex space-x-3 p-4">
          <Button onClick={prevPage} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={nextPage} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
