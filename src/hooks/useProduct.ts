/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useProductStore } from "@/store/ProductStore";
import { useCustomParams } from "@/hooks/useCustomParams";
import type { Product, SearchParams } from "@/interfaces";

// Custom Hook para el manejo de los productos.
export function useProducts() {
    // Referencia del estado inicial de los productos.
    const oldProduct = useRef<Product[]>(null);
    
    // Recuperción de los parametros dinámicos de la URL.
    const { params } = useCustomParams<SearchParams>({ needParams: ["page", "field", "order", "search", "category"] });
    
    const { 
        isPending, error, productsForPage, products, 
        getProducts, 
        filterProductsWithSearch, 
        filterProductsWithCategory, 
        orderProductsBy, 
        paginateProducts 
    } = useProductStore();

    // Obteción inicial de los productos.
    // (Se dispara cuando se renderiza el componenete principal).
    useEffect(() => {
        getProducts();
        oldProduct.current = products;

    }, []);
    
    // Creación de la paginación de los componentes. 
    // (Se dispara cuando el estado de los productos cambia y cuando se navega entre páginas).
    useEffect(() => {
        const page = Number(params?.page || 0);
        paginateProducts(page);

    }, [products, params?.page]);

    // Busquedad de un producto a través de su titulo.
    // (Se dispara cuando cambian el parametro search en la URL). 
    useEffect(() => {
        if (params?.search) {
            // Se busca los productos que contenga el parametro y se muta el estado de los productos.
            filterProductsWithSearch(params.search);

        } else {
            // Cuando se elimina el parametro search se realiza una nueva petición para obtener los productos.
            getProducts();
        }

    }, [params?.search]);
    
    // Filtrado de los productos según su categoría.
    // (Se dispara cuando cambia el parametro category en la URL). 
    useEffect(() => {
        if (params?.category) {
            // Se filtran los productos que contenga el parametro y se muta el estado de los productos.
            // Se pasa siempre la referencia al estado inicial para evitar perdida en los datos.
            filterProductsWithCategory(params.category, oldProduct.current!);
            
        } else {
            // Cuando se elimina el parametro category se realiza una nueva petición para obtener los productos.
            getProducts();
        
            // Se actualiza el estado inicial de los productos despúes de la nueva petición. 
            oldProduct.current = products;
        }

    }, [params?.category]);

    // Ordenamiento de los productos según el campo y orden elegido.
    // (Se dispara cuando cambian los parametros field y order en la URL).
    useEffect(() => {
        // Se pasa siempre la referencia al estado inicial para tener siempre los datos más actuales.
        orderProductsBy(products!, params?.field, params?.order);
        
        // Se vuelve a crear la paginación para los productos ordenados.
        paginateProducts(0);

    }, [params?.field, params?.order])

    return { 
        isPending,
        error,
        params,
        productsForPage,
        orderProductsBy,
    }
}