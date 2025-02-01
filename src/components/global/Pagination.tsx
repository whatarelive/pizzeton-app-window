import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useCustomParams } from "@/hooks/useCustomParams";
import { PaginationLink } from "@/components/ui/pagination";
import { PaginationSkeleton } from "@/components/global/Skeletons";
import type { NavigateProps, SearchParams } from "@/interfaces";

interface Props {
  pages: number[];
  totalPages: number;
  isPending: boolean;
}

export function Pagination({ pages, totalPages, isPending }: Props) {
  const { params, updateParams } = useCustomParams<SearchParams>({ needParams: ["page"] });

  if (isPending) {
    return <PaginationSkeleton/>
  }

  const navigate = ({ destiny, num }: NavigateProps) => {
    const currentPage = Number(params?.page || 0);
    let page = currentPage;

    if (destiny === 'next' && currentPage < totalPages-1) {
      page = currentPage + 1;
    } else if(destiny === 'previous' && currentPage > 0) {
      page = currentPage - 1;
    } else if(num) {
      page =num - 1;
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
          pages.map((num) => (
            <li key={num}>
              <PaginationLink onClick={() => navigate({ num })} isActive={Number(params?.page || 0) === num-1}>
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