import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductCards from "../components/Product-cards";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "@/components/CardSkelteon";
import useProducts from "@/hooks/useProducts";
import AdvanceSearch from "@/components/AdvanceSearch";
import { useAppSelector } from "@/hooks/typedhooks";
import useFilteredProducts from "@/hooks/useFilteredProducts";

const AllProducts = () => {
  const pageSize = 20; // Number of products per page
  const [page, setPage] = useState(1);
  const { fetchProducts } = useProducts();
  const { fetchProductsByFilter } = useFilteredProducts();
  const filteredOptions = useAppSelector((state) => state.filters);
  //fetch all products
  const {
    data: allProducts,
    isLoading: allProductsLoading,
    isError: allProductsIsError,
    refetch,
  } = fetchProducts;
  //fetch filtered products
  const {
    data: filteredProducts,
    isLoading: filteredProductsLoading,
    isError: filteredProductsIsError,
  } = fetchProductsByFilter;

  ///check if there is any filter user requested
  const hasFilters =
    (filteredOptions.types?.length ?? 0) > 0 ||
    (filteredOptions.tags?.length ?? 0) > 0 ||
    (filteredOptions.category?.length ?? 0) > 0;

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
    if (hasFilters) {
      return filteredProducts?.slice(startIndex, startIndex + pageSize);
    } else {
      return allProducts?.slice(startIndex, startIndex + pageSize);
    }
  }, [page, allProducts, pageSize, filteredProducts, hasFilters]);

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

  if (allProductsLoading || filteredProductsLoading)
    return (
      <div>
        <ProductCardSkeleton />
        <div className="-mt-56">
          <ProductCardSkeleton />
        </div>
      </div>
    );
  if (allProductsIsError || filteredProductsIsError)
    return (
      <div>
        <p className="text-red-600 font-semibold">Error loading products.</p>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        <div className="col-span-4 justify-center mt-3 h-fit">
          <h1 className="text-4xl font-mono italic">All Products</h1>
          <div className="mt-4">
            <AdvanceSearch />
          </div>
          {hasFilters && (
            <div className="flex justify-center">
              {filteredOptions?.types?.[0] && (
                <p>Type: {filteredOptions?.types?.[0]}</p>
              )}
              {filteredOptions?.tags?.[0] && (
                <p>Tag: {filteredOptions?.tags?.[0]}</p>
              )}
              {filteredOptions?.category?.[0] && (
                <p>Category: {filteredOptions?.category?.[0]}</p>
              )}
            </div>
          )}
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
