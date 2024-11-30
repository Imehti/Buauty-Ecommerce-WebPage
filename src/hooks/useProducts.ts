import apiClient from "@/services/api-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface Products {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  api_featured_image: string;
  description: string;
  category: string;
  product_type: string;
  product_colors: [{ hex_value: string; colour_name: string }];
}

const useProducts = () => {
  const queryClient = useQueryClient();

  // Fetch all products
  const fetchProducts = useQuery<Products[], Error>({
    queryKey: ["products"],
    queryFn: () => apiClient.get<Products[]>("").then((res) => res.data),
    enabled: false, 
  });

  // Get a product by ID from the cached data
  const GetProductById = (id: number) => {
    return useQuery<Products | undefined, Error>({
      queryKey: ["product", id],
      queryFn: async () => {
        // Attempt to get cached products first
        const cachedProducts = queryClient.getQueryData<Products[]>(["products"]);
        if (cachedProducts) {
          return cachedProducts.find((product) => product.id === id);
        }

        // If no cached products, fetch them and then find the product
        const products = await apiClient.get<Products[]>("").then((res) => res.data);
        return products.find((product) => product.id === id);
      },
      enabled: !!id, // Only fetch if an ID is provided
    });
  };

  return { fetchProducts, GetProductById };
};

export default useProducts;
