import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { pizzetonApi } from "@/api/api-conifg";
import { createPages } from "@/lib/utils";
import { PaginationSkeleton } from "@/components/global/Skeletons";
import { PaginationLink } from "@/components/ui/pagination";
import type { NavigateProps } from "@/interfaces";

export function Pagination() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const { isPending, data } = useQuery({
    queryKey: [
      'productPage', 
      { 
        search: searchParams.get('search'), 
        category: searchParams.get('category')
      }
    ],
    queryFn: async() => {
      const search = searchParams.get('search');
      const category = searchParams.get('category');
      const url = search ? `/products/size?search=${search}&` : "/products/size?"
      
      if (category) {
        url.concat(`category=${category}&`)
      } 
 
      const { data } = await pizzetonApi.get<number>(url);
    
      return createPages(data);
    }
  });

  if (isPending) {
    return <PaginationSkeleton/>
  }

  const navigate = ({ destiny, num }: NavigateProps) => {
    const current = Number(searchParams.get('page')) || 0;
    let page = current;

    if (destiny === 'next' && current < data!.total) {
      page = current + 1;
    } else if(destiny === 'previous' && current > 1 ) {
      page = current - 1;
    } else if(num) {
      page = num-1;
    }

    setSearchParams(() => { 
      searchParams.set('page', page.toString());
      return searchParams;      
    })
  }

  return (
    <nav role="navigation" aria-label="pagination" className="mx-auto h-11 flex w-full justify-center">
      <ul className="flex flex-row border-2 rounded-xl">
        {/* Button Previuos */}
        <li key={0}>
          <PaginationLink
            size="default"
            onClick={() => navigate({ destiny: "previous" })}
            aria-label="Go to previous page"
            className="pl-2.5 border-r-2 rounded-r-none rounded-l-xl"
          >
            <MdChevronLeft size={24} />
          </PaginationLink>
        </li>

        {/* Numbers Pages */}
        {
          data?.pages.map((num) => (
            <li key={num}>
              <PaginationLink onClick={() => navigate({ num })} isActive={Number(searchParams.get('page')) === num-1}>
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
              className="pr-2.5 border-r-0 rounded-r-xl"
          >
              <MdChevronRight size={24} />
          </PaginationLink>
        </li>
      </ul>
    </nav>
  )
}