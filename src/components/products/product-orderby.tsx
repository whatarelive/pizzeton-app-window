import clsx from "clsx";
import { useSearchParams } from "react-router";
import { MdOutlineSwapVert } from "react-icons/md";
import { isField } from "@/lib/utils";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { ProductOrderByItem } from "@/components/products/product-orderby-item";

const fields = ["Nombre", "Precio", "Categoría", "Disponibilidad"];
 
export function ProductOrderBy() {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const handlerClick = (name: string) => {
        const field = searchParams.get('field');
        const orderby = searchParams.get('order');

        if (isField(field!, searchParams) && !orderby) return;

        setSearchParams(() => {
            const orderSelect = orderby !== "ASC" ? "ASC" : "DESC";
            
            searchParams.set("field", name.toLowerCase());
            searchParams.set("order", orderSelect);

            return searchParams;
        })
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-neutral-300 rounded-lg outline-none hover:bg-opacity-20 p-2 w-10 h-10 border border-p_gray_200">
                <MdOutlineSwapVert size={20} color="#333"/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-3 min-w-48 bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
               <DropdownMenu.Tooltip className="-top-[14px] left-[76px]"/>
               
                <DropdownMenu.Label className="text-white">
                    Ordernar por
                </DropdownMenu.Label>
               
                {
                    fields.map((field) => (
                        <DropdownMenu.Item 
                            key={field}
                            onClick={() => handlerClick(field)}
                            className={clsx(
                                "text-white font-semibold",
                                {
                                    "focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-white": !isField(field, searchParams),
                                    "bg-p_rose_900 bg-opacity-15 text-p_rose_600 focus:bg-p_rose_900 focus:bg-opacity-15 focus:text-p_rose_600": isField(field, searchParams),
                                }
                            )} 
                        >
                           <ProductOrderByItem 
                                field={field} 
                                isField={isField(field, searchParams)}
                                orderDSC={searchParams.get('order') === "DESC"}
                            />
                        </DropdownMenu.Item>
                    ))
                }
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}