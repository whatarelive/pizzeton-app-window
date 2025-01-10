import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { pizzetonApi } from "@/api/api-conifg";
import { TableSkeleton } from "@/components/products/product-skeletons";
import { ProductOptions } from "@/components/products/product-options";
import { ProductCategory } from "@/components/products/product-category";
import { ProductDisponibility } from "@/components/products/product-disponibility";
import { TableRow, TableBody, TableCell, Table, TableHead, TableHeader } from "@/components/ui/table";
import type { Product } from "@/interfaces";
  

export function ProductsTable() {
    const [ params ] = useSearchParams();

    const { isPending, error, data } = useQuery({
        queryKey: [
            'products', 
            { 
                page: params.get('page'), 
                search: params.get('search'),
            }
        ],
        queryFn: async() => {
            const page = Number(params.get('page') || 0);
            const search = params.get('search');
            const category = params.get('category');

            const url = search ? `/products?search=${search}&` : "/products?"
            
            if (category) {
                url.concat(`category=${category}&`)
            } 

            const { data } = await pizzetonApi.get<Product[]>(`${url}limit=5&offset=${page * 5}`);
            return data
        }
    })

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
                <TableHead className="w-[550px]">Producto</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Disponibilidad</TableHead>
                <TableHead></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            { data && data.map((product) => (
                <TableRow key={product.id}>
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
                        <ProductOptions productId={product.id}/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}
