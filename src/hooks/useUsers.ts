import apiClient from "@/services/users-api-client";
import { useQuery } from "@tanstack/react-query";

export interface Users {
  results: Results[];
}

export interface Results {
  name: { first: string };
  picture: { large: string };
  location: { city: string };
  id: { value: string };
}

const useUsers = () =>
  useQuery<Users>({
    queryKey: ["users"],
    queryFn: () => apiClient.get<Users>("/?results=8").then((res) => res.data),
    staleTime: Infinity,
  });

export default useUsers;
