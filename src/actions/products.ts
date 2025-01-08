import { pizzetonApi } from "@/api/api-conifg";
import type { Product } from "@/interfaces";

export async function getProducts() {
    try {
        const { data } = await pizzetonApi.get<Product[]>(`/products?limit=${5}&offset=${1}`);

        return data;
    } catch (error) {
        console.log(error);
    }  
}