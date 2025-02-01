/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useProductStore } from "@/store/ProductStore";
import { useCustomParams } from "@/hooks/useCustomParams";
import type { Product, SearchParams } from "@/interfaces";

export function useProducts() {
    const oldProduct = useRef<Product[]>(null);

    const { params } = useCustomParams<SearchParams>({ needParams: ["page", "search", "category", "order", "field"] });
    
    const { 
        isPending, error, productsForPage, products, 
        getProducts, filterProductsWithSearch, filterProductsWithCategory, paginateProducts 
    } = useProductStore();

    useEffect(() => {
        getProducts();
        oldProduct.current = products;
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
    
    useEffect(() => {
        if (params?.category) {
            filterProductsWithCategory(params.category, oldProduct.current!);
            
        } else {
            getProducts();
            oldProduct.current = products;
        }

    }, [params?.category]);
    
    return { 
        isPending,
        error,
        params,
        productsForPage,
    }
}