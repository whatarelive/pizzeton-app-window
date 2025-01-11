import { Skeleton } from "../ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export function TableSkeleton() {
    return (
        <Table className="text-p_gray_900">
            <TableHeader>
                <TableRow className="border-p_gray_300 border-b">
                    <TableHead className="w-[550px]">
                        <Skeleton className="h-5 w-[60px]" />
                    </TableHead>
                    <TableHead>
                       <Skeleton className="h-5 w-[60px]" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-5 w-[80px]" />                        
                    </TableHead>
                    <TableHead>
                       <Skeleton className="h-5 w-[120px]" />
                    </TableHead>
                    <TableHead className="w-0"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {  [1, 2, 3, 4, 5].map((product) => (
                    <TableRow key={product}>
                        <TableCell className="flex gap-4">
                            <Skeleton className="h-16 w-16 rounded-2xl" />

                            <div className="flex flex-col gap-2 justify-center">
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-6 w-[150px]" />
                            </div>
                        </TableCell>
                            
                        <TableCell>
                            <Skeleton className="h-5 w-[60px]" />
                        </TableCell>
                            
                        <TableCell>
                            <Skeleton className="h-5 w-[100px]" />
                        </TableCell>
                        
                        <TableCell>
                            <Skeleton className="w-14 h-7 rounded-full" />
                        </TableCell>
                        
                        <TableCell>
                            <Skeleton className="h-10 w-10" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}