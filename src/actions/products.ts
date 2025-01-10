import { pizzetonApi } from "@/api/api-conifg";
import { isAxiosError } from "axios";

export async function productDelete(id: string) {
    try {
        const { data } = await pizzetonApi.delete(`/products/${id}`);

        console.log(data);
        
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
    }
}