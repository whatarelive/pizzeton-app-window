import { create } from "zustand";
import { isAxiosError } from "axios";
import { compareProduct, createPages } from "@/lib/utils";
import { pizzetonApi } from "@/api/api-conifg";
import type { Product } from "@/interfaces";
import type { ProductStoreState } from '@/store/interfaces';

export const useProductStore = create<ProductStoreState>()((set, get) => ({
    products: null,           // Arreglo de productos.
    productsForPage: null,    // Arreglo de productos por página.
    pages: [],                // Arreglo de páginas.
    pageSize: 7,              // Cantidad de productos por página.
    totalPages: 0,            // Cantidad de páginas.
    isPending: false,         // Estado de espera para realizar mutaciones al estado.
    error: null,              // Estado para almacenar errores que ocurran en la petición.
    
    // Función Asíncrona para recuperar los productos desde el API.
    async getProducts() {
        try {
            // Se actualiza el valor de carga a (true) para mostrar una interfaz de carga.
            set({ isPending: true });

            // Se realiza la petición de los datos a la API.
            const { data } = await pizzetonApi.get<Product[]>(`/products`);
            
            // Se establece la data de los productos.
            // Se actualiza el valor de carga a (falso) para renderizar el contenido en la interfaz.
            set({ products: data, isPending: false });

        } catch (error) {
            if (isAxiosError(error)) {
                // Si el error sucede en la petición a la API se guarda en el estado.
                // Se actualiza el valor de carga a (falso) para renderizar el error en la interfaz.
                set({ isPending: false, error });
            }
        }
    },

    paginateProducts(page) {
        // Recuperacíón de los productos del estado.
        const { products, pageSize } = get();

        if (!products) return;

        // Se actualiza el valor de carga de la interfaz.
        set({ isPending: true });
    
        // Indice inicial (primer elemento de la página).
        const startIndex = page * pageSize;
        // Indice final (último elemento de la página).
        const endIndex = startIndex + pageSize;
        // Creación de los productos de la página actual usando los índices.
        const productsForPage = products.slice(startIndex, endIndex);
        // Creación del arreglo de página y valor del total de ellas.
        const { pages, total } = createPages(products?.length);
    
        // Se actualiza el valor de los productos por página, el arreglo de páginas y el total.
        // Se actualiza el valor de carga a (falso) para renderizar el contenido en la interfaz.
        set({ isPending: false, productsForPage, pages, totalPages: total });
    },

    // Función de ordenamiento según el parametro de campo y orden.
    orderProductsBy(products, field, order) {
        if (!products) return;

        // Filtrado usando la función utilitaria (compareProduct).
        const productS = products.sort((a, b) => compareProduct(a, b, field, order));

        // Actualización del estado con los productos ordenados.
        set({ products: productS });
    },

    // Función de filtrado según el parametro de categoría.
    filterProductsWithCategory(category, products) {
        if (!category) return;

        // Filtrado del los productos según el valor de la categoría.
        const productsF = products.filter((product) => product.category === category);

        // Creación del arreglo de páginas y el total de ellas, según el tamaño del arreglo de productos filtrados.
        const { pages, total } = productsF 
            ? createPages(productsF?.length) 
            : { pages: [], total: 0 };
    
        // Se actualiza los productos, el arreglo de páginas y el total de ellas en el estado global.
        set({ products: productsF, pages, totalPages: total });
    },

    // Función de filtrado según el parametro de busqueda.
    filterProductsWithSearch(search) {
        if (!search) return;

        // Filtrado del los productos según el valor del titulo.
        const products = get().products?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

        // Creación del arreglo de páginas y el total de ellas, según el tamaño del arreglo de productos filtrados.
        const { pages, total } = products 
            ? createPages(products?.length) 
            : { pages: [], total: 0 };

        // Se actualiza los productos, el arreglo de páginas y el total de ellas en el estado global.
        set({ products, pages, totalPages: total });
    },
}))