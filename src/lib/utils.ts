import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createPages(data: number) {
  const pages = Math.round(data / 5);
  const array: number[] = [];
  
  for (let index = 0; index < pages + 1; index++) {
    array.push(index+1)
  }

  return {
    pages: array,
    total: pages
  }
}