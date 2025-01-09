import { use } from "react";
import { cn } from "@/lib/utils";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  getPages: Promise<number>; 
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">

type Destiny = 'next' | 'previous';

export function Pagination({ currentPage, getPages }: PaginationProps) {
  const pages = use(getPages);

  const navigate = (destiny: Destiny) => {
    if (destiny === 'next' && currentPage < pages) {
      return `?page=${currentPage + 1}`;

    } else if(destiny === 'previous' && currentPage > 1 ) {
      return `?page=${currentPage - 1}`
    }
  }

  return (
    <nav role="navigation" aria-label="pagination" className="mx-auto h-11 flex w-full justify-center">
      <ul className="flex flex-row border-2 rounded-xl">
        {/* Button Previuos */}
        <li key={0}>
            <PaginationLink
              size="default"
              href={navigate("previous")}
              aria-label="Go to previous page"
              className="pl-2.5 border-r-2 rounded-r-none rounded-l-xl"
            >
              <MdChevronLeft size={24} />
            </PaginationLink>
        </li>

        {/* Numbers Pages */}
        {
          new Array<number>(pages).map((n) => (
            <li key={(pages + 1)}>
              <PaginationLink href={`?page=${n}`} isActive={currentPage === n}>
                { n }
              </PaginationLink>
            </li>
          ))
        }

        {/* Button Next */}
        <li key={pages + 2}>
            <PaginationLink
                size="default"
                href={navigate("next")}
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

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "destructive" : "ghost",
          size,
        }),
        'rounded-none border-r-2 text-p_gray_600',
        {
          'hover:text-p_rose_900 text-white': isActive
        },
        className
      )}
      {...props}
    />
  )
}