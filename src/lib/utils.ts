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
    pages: array,
    total: pages
  }
}