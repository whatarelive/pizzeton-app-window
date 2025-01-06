import { create } from "zustand";

type State = {
    isOpen: boolean;
    change: () => void;
}

export const useMenuStore = create<State>((set) => ({
    isOpen: false,
    change() {
        set((state) => ({ isOpen: !state.isOpen }));
    },
}))