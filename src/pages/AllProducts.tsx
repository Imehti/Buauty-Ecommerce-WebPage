import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductCards from "../components/Product-cards";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "@/components/CardSkelteon";
import useProducts from "@/hooks/useProducts";
import AdvanceSearch from "@/components/AdvanceSearch";

const AllProducts = () => {
  const pageSize = 20; // Number of products per page
  const [page, setPage] = useState(1);
  const {fetchProducts} = useProducts()
  const { data: allProducts, isLoading, isError, refetch } = fetchProducts;

  useEffect(() => {
    refetch();
  }, []);

  // Calculate the paginated products
  const totalPages = useMemo(
    () => Math.ceil((allProducts?.length ?? 0) / pageSize),
    [allProducts]
  );
  const currentProducts = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return allProducts?.slice(startIndex, startIndex + pageSize);
  }, [page, allProducts, pageSize]);

  const nextPage = useCallback(() => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [page, totalPages]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [page]);

  if (isLoading)
    return (
      <div>
        <ProductCardSkeleton />
        <div className="-mt-56">
        <ProductCardSkeleton />
        </div>
      </div>
    );
  if (isError) return <div><p className="text-red-600 font-semibold">Error loading products.</p></div>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        <div className="col-span-4 justify-center mt-3 h-fit">
          <h1 className="text-4xl font-mono italic">All Products</h1>
          <div className="mt-4">
          <AdvanceSearch />
          </div>
        </div>
        {currentProducts?.map((product) => (
          <ProductCards
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            price_sign={product.price_sign}
            image_link={product.api_featured_image}
            product_type={product.product_type}
          />
        ))}
        <div className="flex flex-col">
          <div className="flex space-x-3 p-4">
            <Button onClick={prevPage} disabled={page === 1}>
              Previous
            </Button>
            <Button onClick={nextPage} disabled={page === totalPages}>
              Next
            </Button>
          </div>
          <div className="ml-8">
            <span>
              page {page} of {totalPages}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
