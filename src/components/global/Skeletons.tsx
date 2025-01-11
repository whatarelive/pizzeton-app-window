import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Skeleton } from '../ui/skeleton';

export function PaginationSkeleton() {
    return (
        <nav role="navigation" aria-label="pagination" className="mx-auto h-11 flex w-full justify-center">
            <ul className="flex flex-row gap-1 justify-between rounded-xl">
                {/* Button Previuos */}
                <li className="pl-2.5 rounded-r-none rounded-l-xl">
                    <Skeleton className='flex justify-center items-center w-10 h-10'>
                        <MdChevronLeft size={24} />
                    </Skeleton>
                </li>
        
                {/* Numbers Pages */}
                <li>
                    <Skeleton className='w-10 h-10'/>
                </li>
        
                {/* Button Next */}
                <li className="pr-2.5 rounded-r-xl">
                    <Skeleton className='flex justify-center items-center w-10 h-10'>
                        <MdChevronRight size={24} />
                    </Skeleton>
                </li>
            </ul>
        </nav>
    )   
}