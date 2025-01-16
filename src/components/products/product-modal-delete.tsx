import { MdDelete } from "react-icons/md";
import { useModalStore } from "@/store/MenuStore";
import { productDelete } from "@/actions/products";
import { Button } from "@/components/ui/button";
import * as Modal from "@/components/ui/dialog";

export function ProductDeleteModal() {
    const { isOpen, change, productId, productName } = useModalStore();

    const handleClickAcept = () => {
        productDelete(productId!);
        change();
    }

    return (
        <Modal.Dialog open={isOpen}>
            <Modal.DialogContent className="sm:max-w-[380px] bg-p_gray_900">
                <Modal.DialogHeader>
                    <Modal.DialogDescription className="flex flex-row gap-3 px-2">
                        <div className="inline-flex items-center justify-center bg-[#3D3D3D] rounded-md min-w-14 min-h-14">
                            <MdDelete className="text-p_rose_600" size={38}/>
                        </div>
                        
                        <p className="text-lg font-medium text-start text-[#eeeeee]">
                            ¿Desea eliminar el producto { productName } ? 
                        </p>
                    </Modal.DialogDescription>
                </Modal.DialogHeader>
                <Modal.DialogFooter className="flex flex-row gap-3 mt-3 font-semibold">
                    <Button
                        onClick={() => change()} 
                        variant="ghost"
                        size="lg"
                        className="w-full text-base border border-p_gray_600 hover:border-white"
                    > 
                        Cancelar
                    </Button>
                    <Button 
                        onClick={handleClickAcept}
                        variant="destructive"
                        size="lg"
                        className="w-full text-base bg-p_rose_600 hover:bg-p_rose_900"
                    > 
                        Aceptar
                    </Button>
                </Modal.DialogFooter>
            </Modal.DialogContent>
        </Modal.Dialog>
    )
}