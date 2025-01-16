import { create } from "zustand";

interface State {
    isOpen: boolean;
    change: () => void;
}

interface ModalState extends Pick<State, 'isOpen'> {
    productId: string | null;
    productName: string | null;
    change: (productId?: string, productName?: string) => void;
}

export const useMenuStore = create<State>((set) => ({
    isOpen: false,
    change() {
        set((state) => ({ isOpen: !state.isOpen }));
    },
}))

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    productId: null,
    productName: null,
    change(productId, productName) {
        set((state) => ({ 
            isOpen: !state.isOpen, 
            productId: productId,
            productName: productName,
        }));
    }
}))