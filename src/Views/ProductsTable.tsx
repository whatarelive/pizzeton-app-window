import clsx from "clsx";
import { use } from "react";
import { MdMoreVert } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "@/components/products/product-category";
import { ProductDisponibility } from "@/components/products/product-disponibility";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import type { Product } from "@/interfaces"

interface Props {
    getProducts: Promise<Product[] | undefined>;
}

export function ProductsTable({ getProducts }: Props) {
   const products = use(getProducts);

  return (
    <Table className="text-p_gray_900 border-b">
        <TableHeader>
            <TableRow className="border-p_gray_300 border-b">
                <TableHead>Producto</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Disponibilidad</TableHead>
                <TableHead></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {products && products.map((product) => (
                <TableRow key={product.imgId}>
                    <TableCell className="flex gap-4">
                        <img 
                            src={product.imgUrl} 
                            alt={product.title}
                            loading="lazy"
                            className="rounded-2xl w-16 h-16"
                        />

                        <div className="flex flex-col justify-center">
                            <h2 
                                className={clsx(
                                    'font-medium',
                                    { 
                                    'text-p_green' : product.stock,
                                    'text-p_rose_900' : !product.stock,
                                    }
                                )}
                                >
                                    {product.title}
                            </h2>

                            <p className="text-wrap text-[13px] line-clamp-2 max-w-[266px] text-p_gray_600">
                                {product.subtitle}
                            </p>
                        </div>
                    </TableCell>
                        
                    <TableCell className="text-p_gray_900 font-medium">
                        $ { 
                            product.price.toString().length === 3 
                                ? product.price.toPrecision(5)
                                : product.price.toPrecision(6)
                        }
                    </TableCell>
                        
                    <TableCell>
                        <ProductCategory category={product.category}/>
                    </TableCell>
                    
                    <TableCell>
                        <ProductDisponibility stock={product.stock}/>
                    </TableCell>
                    
                    <TableCell>
                        <Button size="icon" variant="ghost">
                            <MdMoreVert size={24}/>
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}
