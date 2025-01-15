import clsx from "clsx";
import { MdFilterList, MdDinnerDining, MdIcecream, MdLocalPizza, MdSportsBar } from "react-icons/md";
import { useCustomParams } from "@/hooks/useCustomParams";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { ProductDisponibility } from "@/components/products/product-disponibility";
import { SearchParams } from "@/interfaces";

const categories = [
  {
    label: "Pizzas",
    icon: MdLocalPizza
  },
  {
    label: "Pastas",
    icon: MdDinnerDining
  },
  {
    label: "Postres",
    icon: MdIcecream
  },
  {
    label: "Bebidas",
    icon: MdSportsBar
  }
]

interface State extends Pick<SearchParams, "category" | "stock"> {}

export function ProductFilters() {
    const { params, updateParams } = useCustomParams<State>({ needParams: ["category", "stock"] });

    const handlerClick = (name: string) => {
        if (params?.category !== name) {
            updateParams([{ param: "category", value: name }])
        }
    }

    const handlerCheck = () => {
        const newStock = params?.stock === "true" ? "false" : "true";
        updateParams([{ param: "stock", value: newStock }]);
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-neutral-300 rounded-lg outline-none hover:bg-opacity-20 p-2 w-10 h-10 border border-p_gray_200">
                <MdFilterList size={20} color="#333"/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="absolute top-4 -right-14 p-3 w-[335px] bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
                <DropdownMenu.Tooltip className="fixed -top-[1px] -left-[20px]"/>
                <DropdownMenu.Label className="text-white">
                    Filtrar por
                </DropdownMenu.Label>
                <DropdownMenu.Group>
                    <DropdownMenu.Label className="text-p_gray_100 text-opacity-75">
                        Categoría
                    </DropdownMenu.Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {
                            categories.map((categ, index) => {
                                const Icon = categ.icon;

                                return (
                                    <DropdownMenu.Item 
                                        key={index} 
                                        onClick={() => handlerClick(categ.label)}
                                        className={clsx(
                                            "rounded-md font-semibold",
                                            {
                                                "bg-p_gray_600 bg-opacity-30 text-p_gray_400 focus:bg-p_rose_300 focus:bg-opacity-30 focus:text-p_rose_300": params?.category !== categ.label,
                                                "bg-p_rose_300 bg-opacity-30 text-p_rose_300 focus:bg-p_rose_300 focus:bg-opacity-30 focus:text-p_rose_300": params?.category === categ.label,
                                            }
                                        )}
                                        >
                                        <Icon size={24}/>
                                        <span>{ categ.label }</span>
                                    </DropdownMenu.Item>
                                )
                            })
                        }
                    </div>
                </DropdownMenu.Group>
                
                <DropdownMenu.Separator className="bg-p_gray_600 bg-opacity-25 mt-4 mb-2"/>

                <DropdownMenu.Group>
                    <DropdownMenu.Label className="text-p_gray_100 text-opacity-75">
                        Disponibilidad
                    </DropdownMenu.Label>
                    <div className="flex items-center gap-2">
                        <DropdownMenu.Label className="text-wrap text-xs italic text-p_gray_400">
                            <span className="text-white not-italic">Mostrar todos los productos</span>
                            (Si desactiva esta opción solo se mostraran los productos disponibles)
                        </DropdownMenu.Label>

                        <ProductDisponibility 
                            stock={params?.stock === "true"} 
                            onClick={handlerCheck}
                        />
                    </div>
                </DropdownMenu.Group>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}