import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";
import { MdOutlineSearch } from "react-icons/md";
import { InputWithIcon } from "@/components/ui/input";

export function Search() {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const handleSearch = useDebouncedCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setSearchParams(() => {
        searchParams.set('search', target.value.trim());
        return searchParams;
      });
    }, 1500); 

    return (
        <InputWithIcon
            type="text" 
            name="search" 
            placeholder="¿Qué estás buscando?" 
            className="items-center gap-2 w-[235px] h-10" 
            onChange={handleSearch}
        >
            <MdOutlineSearch size={24} color="#333" className="min-w-6"/>
        </InputWithIcon>
    )
}