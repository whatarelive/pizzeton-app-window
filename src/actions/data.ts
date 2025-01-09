import { pizzetonApi } from "@/api/api-conifg";

export async function getPages(url: string) {
    try {
        const { data } = await pizzetonApi.get<number>(url);

        return data;
    } catch (error) {
        console.log(error);
        return 1;
    }
}