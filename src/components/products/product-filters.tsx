import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { MdFilterList } from "react-icons/md";

export function ProductFilters() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-neutral-300 rounded-lg outline-none hover:bg-opacity-20 p-2 w-10 h-10 border border-p_gray_200">
                <MdFilterList size={20} color="#333"/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-3 min-w-40 bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
                <DropdownMenu.Tooltip className="-top-[14px] left-[60px]"/>
                <DropdownMenu.Label className="text-white">
                    Opciones
                </DropdownMenu.Label>
                <DropdownMenu.Item 
                    className="text-white font-medium focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-white" 
                >
                    <span>Editar</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item 
                    className="text-p_rose_900 font-medium focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-p_rose_900" 
                >
                    <span>Eliminar</span>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}