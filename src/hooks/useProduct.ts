/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useProductStore } from "@/store/ProductStore";
import { useCustomParams } from "@/hooks/useCustomParams";
import type { SearchParams } from "@/interfaces";

export function useProducts() {
    const { params } = useCustomParams<SearchParams>({ needParams: ["page", "search", "order", "field"] });
    const { isPending, error, productsForPage, products, getProducts, filterProductsWithSearch, paginateProducts } = useProductStore();

    useEffect(() => {
        getProducts();
    }, []);
    
    useEffect(() => {
        const page = Number(params?.page || 0);

        paginateProducts(page);
    }, [products, params?.page]);

    useEffect(() => {
        if (params?.search) {
            filterProductsWithSearch(params.search);

        } else {
            getProducts();
        }

    }, [params?.search]);
    
    return { 
        isPending,
        error,
        params,
        productsForPage,
    }
}