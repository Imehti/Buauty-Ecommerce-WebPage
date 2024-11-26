import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Products } from "./useProducts";

const useAllProducts = () =>
  useQuery<Products[], Error>({
    queryKey: ["allProducts"],
    queryFn: () => apiClient.get<Products[]>("").then((res) => res.data),
    enabled:false
  });

export default useAllProducts;
