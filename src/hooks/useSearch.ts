import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useSearch() {
    const [search, setSearch] = useState<string | null>();

    const postSearch = useDebouncedCallback((value: string) => {
        setSearch(value);
    }, 1500)

    return {
        search,
        postSearch
    }
}