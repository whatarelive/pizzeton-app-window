import type { IconType } from "react-icons";

export type Category = 'Pizzas' | 'Pastas' | 'Postres' | 'Bebidas'

export interface Route {
    label: string;
    path: `/${string}`;
    icon: IconType;
}

export interface Product {
    id: string;
    title: string,
    subtitle: string,
    category: Category,
    price: number,
    imgUrl: string;
    stock: boolean;
    imgId: string;
}