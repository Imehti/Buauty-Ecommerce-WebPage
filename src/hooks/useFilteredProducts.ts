import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Products } from "./useProducts";
import { useAppSelector } from "./typedhooks";

const useFilteredProducts = () => {
  const filters = useAppSelector(state => state.filters); // Access filters from Redux state

  const fetchProductsByFilter = useQuery<Products[], Error>({
    queryKey: ['filteredProducts', filters], // Include filters in the query key to refetch when filters change
    queryFn: () => {
      // Build query parameters
      const params: { [key: string]: string } = {};

      // Add filters dynamically if they are available
      if (filters.types?.[0]) {
        params.product_type = filters.types[0]; 
      }

      if (filters.tags?.[0]) {
        params.product_tags = filters.tags[0]; 
      }

      if (filters.category?.[0]) {
        params.product_category = filters.category[0]; 
      }

      // Send the request with the dynamically built params
      return apiClient.get<Products[]>('', { params }).then(res => res.data);
    },
    refetchOnWindowFocus: false, 
  });

  return { fetchProductsByFilter };
};

export default useFilteredProducts;
