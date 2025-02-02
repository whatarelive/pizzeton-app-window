export interface ProductStoreState {
    products: Product[] | null;
    productsForPage: Product[] | null;
    pageSize: number;
    pages: number[];
    totalPages: number;
    isPending: boolean;
    error: AxiosError | null;
    getProducts: () => void;
    paginateProducts: (page: number) => void;
    orderProductsBy: (products: Product[], field?: string, order?: string) => void;
    filterProductsWithCategory: (category: string, products: Product[]) => void;
    filterProductsWithSearch: (search: string) => void;
}