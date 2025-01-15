import { useNavigate } from "react-router";
import { MdMoreVert, MdEdit } from "react-icons/md";
import { ProductDeleteModal } from "@/components/products/product-modal-delete";
import * as DropdownMenu from "@/components/ui/dropdown-menu";

interface Props {
    productId: string;
    name: string;
} 

export function ProductOptions({ productId, name }: Props) {
    const navigate = useNavigate();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-neutral-300 outline-none rounded-lg hover:bg-opacity-20 p-2">
                <MdMoreVert size={24}/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-3 min-w-40 bg-p_gray_900 rounded-xl shadow-lg border-0 shadow-p_gray_900">
                <DropdownMenu.Tooltip className="-top-[14px] left-[60px]"/>
                <DropdownMenu.Label className="text-white">
                    Opciones
                </DropdownMenu.Label>
                <DropdownMenu.Item 
                    onClick={() => navigate(`/products/edit/${productId}`)}
                    className="text-white font-medium focus:bg-p_gray_600 focus:bg-opacity-30 focus:text-white" 
                >
                    <MdEdit className="min-w-5 min-h-5"/>
                    <span>Editar</span>
                </DropdownMenu.Item>

                <ProductDeleteModal id={productId} name={name}/>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}