import { Product } from "@/interfaces";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createPages(data: number) {
  const pages = Math.round(data / 7);
  const array: number[] = [];
  
  for (let index = 0; index < pages; index++) {
    array.push(index+1)
  }
  
  return {
    pages: array.length === 0 ? [1] : array,
    total: pages
  }
}

export function compareProduct(a: Product, b: Product, field?: string, order?: string) {
  if (field === "precio") {
    return order === 'ASC' ? a.price - b.price : b.price - a.price;
  } else if (field === "stock") {
    return order === 'ASC' ? Number(a.stock) - Number(b.stock) : Number(b.stock) - Number(a.stock);
  } else {
    const fieldA = field === "nombre" ? a.title : a.category;
    const fieldB = field === "nombre" ? b.title : b.category;
    return order === 'ASC' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
  }
}