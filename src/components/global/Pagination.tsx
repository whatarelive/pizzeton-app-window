import { useQuery } from "@tanstack/react-query";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { pizzetonApi } from "@/api/api-conifg";
import { createPages } from "@/lib/utils";
import { PaginationSkeleton } from "@/components/global/Skeletons";
import { PaginationLink } from "@/components/ui/pagination";
import type { NavigateProps, SearchParams } from "@/interfaces";
import { useCustomParams } from "@/hooks/useCustomParams";

interface State extends Omit<SearchParams, "field" | "order"> {}

export function Pagination() {
  const { params, updateParams } = useCustomParams<State>({ needParams: ["page", "search", "category", "stock",] });

  const { isPending, data } = useQuery({
    queryKey: [ 
      'productPage', 
      { 
        search: params?.search,
        category: params?.category,
        stock: params?.stock,
      } 
    ],
    queryFn: async() => {
      let url = params?.search ? `/products/size?search=${params.search}&` : "/products/size?"
      
      if (params?.category) {
        url = `${url}category=${params.category}`
      } 

      if (params?.stock) {
        // url.concat(`stock=${params.stock}`);
      }
 
      const { data } = await pizzetonApi.get<number>(url);
    
      return createPages(data);
    }
  });

  if (isPending) {
    return <PaginationSkeleton/>
  }

  const navigate = ({ destiny, num }: NavigateProps) => {
    const current = Number(params?.page) || 0;
    let page = current;

    if (destiny === 'next' && current < data!.total) {
      page = current + 1;
    } else if(destiny === 'previous' && current > 1 ) {
      page = current - 1;
    } else if(num) {
      page = num-1;
    }

    updateParams([
      { param: "page", value: page.toString() }
    ]);
  }

  return (
    <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
      <ul className="flex flex-row">
        {/* Button Previuos */}
        <li key={0}>
          <PaginationLink
            size="default"
            onClick={() => navigate({ destiny: "previous" })}
            aria-label="Go to previous page"
            className="pl-2.5 hover:border rounded-l-lg"
          >
            <MdChevronLeft size={24} />
          </PaginationLink>
        </li>

        {/* Numbers Pages */}
        {
          data?.pages.map((num) => (
            <li key={num}>
              <PaginationLink onClick={() => navigate({ num })} isActive={Number(params?.page) === num-1}>
                { num }
              </PaginationLink>
            </li>
          ))
        }

        {/* Button Next */}
        <li key={data!.total+2}>
          <PaginationLink
              size="default"
              onClick={() => navigate({ destiny: "next" })}
              aria-label="Go to next page"
              className="pr-2.5 hover:border rounded-r-lg"
          >
              <MdChevronRight size={24} />
          </PaginationLink>
        </li>
      </ul>
    </nav>
  )
}