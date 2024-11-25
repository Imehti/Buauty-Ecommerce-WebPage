import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Products {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  api_featured_image:string
  description: string;
  category: string;
  product_type: string;
  product_colors: [{ hex_value: string; colour_name: string }];
}

const useProducts = () =>
  useQuery<Products[], Error>({
    queryKey: ["products"],
    queryFn: () => apiClient.get<Products[]>("").then((res) => res.data.slice(0, 30)),
  });

export default useProducts;
