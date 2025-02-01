import { useQuery } from "@tanstack/react-query";
import { pizzetonApi } from "@/api/api-conifg";
import { useCustomParams } from "@/hooks/useCustomParams";
import type { Product, SearchParams } from "@/interfaces";

export function useProducts() {
    const { params } = useCustomParams<SearchParams>({ needParams: ["page", "search", "category", "order", "field", "stock"] });
    
    const { isPending, error, data } = useQuery({
        queryKey: [ 'products', { params } ],
        queryFn: async() => {
            const page = Number(params?.page || 0);
            let url = params?.search ? `/products?search=${params?.search}&` : "/products?"
            
            console.log(params);

            if (params?.category) {
                url = `${url}category=${params.category}&`;
            }

            if (params?.field && params.order) {
                // url.concat(`field=${params.field}&order=${params.order}&`);
            }

            if (params?.stock) {
                // url.concat(`stock=${params.stock}`)
            }

            console.log(url);
            

            const { data } = await pizzetonApi.get<Product[]>(`${url}limit=7&offset=${page * 7}`);
            return data
        },
    })

    return { 
        params,
        isPending,
        error,
        products: data,
    }
}