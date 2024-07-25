import apiClient from "@/services/users-api-client"
import { useQuery , UseQueryResult } from "@tanstack/react-query"

interface Users{
    results:Results[]
}

interface Results{
    name:{first:string},
    picture:{large:string},
    location:{city:string}
}

const useUsers= () => 
useQuery<Users>({
    queryKey:['users'],
    queryFn:()=> apiClient.get<Users>('/?results=8').then(res=>res.data)
})

export default useUsers