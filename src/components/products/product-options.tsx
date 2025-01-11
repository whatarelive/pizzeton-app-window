import { useNavigate } from "react-router";
import { MdMoreVert, MdEdit, MdDelete } from "react-icons/md"
import { productDelete } from "@/actions/products";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Props {
    productId: string;
} 

export function ProductOptions({ productId }: Props) {
    const navigate = useNavigate();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg hover:bg-opacity-30 p-2">
                <MdMoreVert size={24}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3 min-w-40 bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
                <div className="absolute -top-[14px] left-[60px] border-b-[30px] border-l-[20px] border-r-[20px] border-b-p_gray_900 border-l-transparent border-r-transparent" />
                <DropdownMenuLabel className="text-white">
                    Opciones
                </DropdownMenuLabel>
                <DropdownMenuItem 
                    onClick={() => navigate(`/products/edit/${productId}`)}
                    className="text-white font-medium focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-white" 
                >
                    <MdEdit className="min-w-5 min-h-5"/>
                    <span>Editar</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={() => productDelete(productId)}
                    className="text-p_rose_900 font-medium focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-p_rose_900" 
                >
                    <MdDelete className="min-w-5 min-h-5"/>
                    <span>Eliminar</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}