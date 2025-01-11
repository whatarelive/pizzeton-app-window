import type { IconType } from "react-icons";
import type { ButtonProps } from "@/components/ui/button";

export type Category = 'Pizzas' | 'Pastas' | 'Postres' | 'Bebidas'
type Destiny = 'next' | 'previous';

export type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, "size"> & React.ComponentProps<"button">

export interface NavigateProps {
    destiny?: Destiny; 
    num?: number;  
}
  
export interface Route {
    label: string;
    path: `/${string}`;
    icon: IconType;
}

export interface SearchParams {
    page: string;
    search: string;
    category: string;
    order: string;
    field: string;
    stock: string;
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