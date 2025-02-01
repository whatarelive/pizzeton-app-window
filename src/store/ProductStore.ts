import { create } from "zustand";
import { isAxiosError, type AxiosError } from "axios";
import { createPages } from "@/lib/utils";
import { pizzetonApi } from "@/api/api-conifg";
import type { Product } from "@/interfaces";

interface State {
    products: Product[] | null;
    productsForPage: Product[] | null;
    pageSize: number;
    pages: number[];
    totalPages: number;
    isPending: boolean;
    error: AxiosError | null;
    getProducts: () => void;
    paginateProducts: (page: number) => void;
    orderProductsBy: (field: keyof Product, order: "ASC" | "DESC") => void;
    filterProductsWithCategory: (category: string) => void;
    filterProductsWithSearch: (search: string) => void;
}

export const useProductStore = create<State>()((set, get) => ({
    products: null,
    productsForPage: null,
    pages: [],
    pageSize: 7,
    currentPage: 0,
    totalPages: 0,
    isPending: false,
    error: null,
    async getProducts() {
        try {
            set({ isPending: true });

            const { data } = await pizzetonApi.get<Product[]>(`/products`);
            
            set({ products: data, isPending: false });

        } catch (error) {
            if (isAxiosError(error)) {
                set({ isPending: false, error });
            }
        }
    },

    paginateProducts(page) {
        const { products, pageSize } = get();
        if (!products) return;
    
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        const productsForPage = products.slice(startIndex, endIndex);
        const { pages, total } = createPages(products?.length);
    
        set({ productsForPage, pages, totalPages: total });
    },

    orderProductsBy(field, order) {
        const products = get().products?.sort((a, b) => {
            const orderP = order === "ASC" ? 1 : -1
            return (a[field] > b[field] ? 1 : -1) * orderP
        });

        set({ products });
    },

    filterProductsWithCategory(category) {
        if (category) {
            const products = get().products?.filter((product) => product.category === category);
            const { pages, total } = products ? createPages(products?.length) : { pages: [], total: 0 };
        
            set({ products, pages, totalPages: total });
        }
    },

    filterProductsWithSearch(search) {
        if (search) {
            const products = get().products?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
            const { pages, total } = products ? createPages(products?.length) : { pages: [], total: 0 };

            set({ products, pages, totalPages: total });
        }
    },
}))