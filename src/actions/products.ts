import { pizzetonApi } from "@/api/api-conifg";
import type { Product } from "@/interfaces";

interface GetProductsProps {
    search?: string | null;
    limit?: number; 
    offset?: number;
}

export async function getProducts({ search }: GetProductsProps) {    
    try {
        const { data } = await pizzetonApi.get<Product[]>(`/products?limit=${5}&offset=${1}`);

        if (search) {
            return data.filter((d) => d.title.includes(search));
        }

        return data;
    } catch (error) {
        console.log(error);
    }  
}