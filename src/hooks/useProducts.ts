import apiClient from "@/services/api-client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";


interface Products {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  description: string;
  category: string;
  product_type: string;
  product_colors: [{ hex_value: string; colour_name: string }];
}

const useProducts=(): UseQueryResult<Products, Error>=>
useQuery<Products,Error>({
    queryKey:['products'],
    queryFn:()=> apiClient.get<Products>('').then(res=>res.data)
})


export default useProducts