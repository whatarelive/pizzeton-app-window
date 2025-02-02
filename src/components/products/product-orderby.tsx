import clsx from "clsx";
import { MdOutlineSwapVert } from "react-icons/md";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { ProductOrderByItem } from "@/components/products/product-orderby-item";
import { useCustomParams } from "@/hooks/useCustomParams";
import { SearchParams } from "@/interfaces";

const fields = ["Nombre", "Precio", "Categoría", "Disponibilidad"];

interface State extends Pick<SearchParams, "page" | "field" | "order"> {}

export function ProductOrderBy() {
    const { params, updateParams } = useCustomParams<State>({ needParams: ["page", "field", "order"] });

    const handlerClick = (name: string) => {
        if (name === params!.field && !params?.order) return;

        const orderSelect = params?.order !== "ASC" ? "ASC" : "DESC";
        
        updateParams([
            { param: "field", value: name.toLowerCase() },
            { param: "order", value: orderSelect },
            { param: "page", value: "0" }
        ]);
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-neutral-300 rounded-lg outline-none hover:bg-opacity-20 p-2 w-10 h-10 border border-p_gray_200">
                <MdOutlineSwapVert size={20} color="#333"/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="absolute -right-24 top-4 p-3 min-w-48 bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
               <DropdownMenu.Tooltip className="fixed -top-[1px] -left-5"/>
               
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
                                    "focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-white": params?.field !== field.toLowerCase(),
                                    "bg-p_rose_600 bg-opacity-30 text-base text-p_rose_600 focus:bg-p_rose_600 focus:bg-opacity-45 focus:text-p_rose_600": params?.field === field.toLowerCase(),
                                }
                            )} 
                        >
                           <ProductOrderByItem 
                                field={field} 
                                isField={params?.field === field.toLowerCase()}
                                orderDSC={params?.order === "DESC"}
                            />
                        </DropdownMenu.Item>
                    ))
                }
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}