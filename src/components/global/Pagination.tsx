import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { PaginationSkeleton } from "@/components/global/Skeletons";
import { PaginationLink } from "@/components/ui/pagination";
import { useProductStore } from "@/store/ProductStore";
import type { NavigateProps } from "@/interfaces";

export function Pagination() {
  const { isPending, pages, currentPage, totalPages, paginateProducts } = useProductStore();

  if (isPending) {
    return <PaginationSkeleton/>
  }

  const navigate = ({ destiny, num }: NavigateProps) => {
    if (destiny === 'next' && currentPage < totalPages) {
      paginateProducts(currentPage + 1);
    } else if(destiny === 'previous' && currentPage > 0 ) {
      paginateProducts(currentPage - 1);
    } else if(num) {
      paginateProducts(num - 1);
    }
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
          pages.map((num) => (
            <li key={num}>
              <PaginationLink onClick={() => navigate({ num })} isActive={currentPage === num-1}>
                { num }
              </PaginationLink>
            </li>
          ))
        }

        {/* Button Next */}
        <li key={totalPages+2}>
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