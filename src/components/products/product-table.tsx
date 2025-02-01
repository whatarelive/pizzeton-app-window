import clsx from "clsx";
import { useEffect } from "react";
import { TableSkeleton } from "@/components/products/product-skeletons";
import { ProductOptions } from "@/components/products/product-options";
import { ProductCategory } from "@/components/products/product-category";
import { ProductOrderByItem } from "@/components/products/product-orderby-item";
import { ProductDisponibility } from "@/components/products/product-disponibility";
import { TableRow, TableBody, TableCell, Table, TableHead, TableHeader } from "@/components/ui/table";
import { useProductStore } from "@/store/ProductStore";
import { useCustomParams } from "@/hooks/useCustomParams";
import type { SearchParams } from "@/interfaces";
  
export function ProductsTable() {
    const { params } = useCustomParams<SearchParams>({ needParams: ["order", "field"] });
    const { isPending, error, productsForPage, currentPage, products, getProducts, paginateProducts } = useProductStore();

    useEffect(() => {
        getProducts();
    }, []);
    
    useEffect(() => {
        paginateProducts(currentPage);
    }, [products, currentPage])

    if (isPending) {
        return <TableSkeleton/>
    }

    if (error) {
        console.log(error);
    }

  return (
    <Table className="text-p_gray_900">
        <TableHeader>
            <TableRow className="border-p_gray_300 border-b">
                <TableHead className="w-[550px]">
                    <ProductOrderByItem 
                        field={"Producto"} 
                        table
                        orderDSC={params?.order === "DESC"} 
                        isField={params?.field === "nombre"}
                    />    
                </TableHead>
                <TableHead>
                    <ProductOrderByItem 
                        field={"Precio"} 
                        table
                        orderDSC={params?.order === "DESC"} 
                        isField={params?.field === "precio"}
                    />    
                </TableHead>
                <TableHead>
                    <ProductOrderByItem 
                        field={"Categoría"} 
                        table
                        orderDSC={params?.order === "DESC"} 
                        isField={params?.field === "categoría"}
                    />        
                </TableHead>
                <TableHead>
                    <ProductOrderByItem 
                        field={"Disponibilidad"} 
                        table
                        orderDSC={params?.order === "DESC"} 
                        isField={params?.field === "disponibilidad"}
                    />    
                </TableHead>
                <TableHead className="w-0"/>
            </TableRow>
        </TableHeader>
        <TableBody>
            { productsForPage && productsForPage.map((product) => (
                <TableRow key={product.id} className="hover:bg-p_gray_100 hover:rounded-lg">
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
                        <ProductOptions productId={product.id} name={product.title}/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}
