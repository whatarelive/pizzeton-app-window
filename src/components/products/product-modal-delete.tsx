import { MdDelete } from "react-icons/md";
import { productDelete } from "@/actions/products";
import * as Modal from "@/components/ui/dialog";

interface Props {
    id: string;
    name: string;
}

export function ProductDeleteModal({ id, name }: Props) {
    return (
        <Modal.Dialog>
            <Modal.DialogTrigger asChild >
                <div 
                    className="flex gap-2 px-2 py-1.5 w-[135px] items-center text-p_rose_900 font-medium hover:bg-p_gray_600 hover:bg-opacity-30 
                    hover:text-p_rose_900 relative cursor-default select-none rounded-sm text-sm outline-none transition-colors"
                >
                    <MdDelete className="min-w-5 min-h-5"/>
                    <span>Eliminar</span>
                </div>
            </Modal.DialogTrigger>
            <Modal.DialogContent className="sm:max-w-[380px] bg-p_gray_900">
                <Modal.DialogHeader>
                    <Modal.DialogDescription className="flex flex-row gap-3 px-2">
                        <div className="inline-flex items-center justify-center bg-[#3D3D3D] rounded-md min-w-14 min-h-14">
                            <MdDelete className="text-p_rose_600" size={38}/>
                        </div>
                        
                        <p className="text-lg font-medium text-start text-[#eeeeee]">
                            ¿Desea eliminar el producto { name } ? 
                        </p>
                    </Modal.DialogDescription>
                </Modal.DialogHeader>
                <Modal.DialogFooter className="flex flex-row gap-3 font-semibold">
                    <Modal.DialogClose className="w-full h-10 rounded-md border border-p_gray_600 hover:bg-white hover:text-p_rose_600"> 
                        No
                    </Modal.DialogClose>
                    <Modal.DialogClose 
                        className="w-full h-10 rounded-md bg-p_rose_600 hover:bg-p_rose_900"
                        onClick={() => productDelete(id)}
                    > 
                        Si
                    </Modal.DialogClose>
                </Modal.DialogFooter>
            </Modal.DialogContent>
        </Modal.Dialog>
    )
}