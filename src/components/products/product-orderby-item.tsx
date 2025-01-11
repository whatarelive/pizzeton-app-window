import clsx from "clsx";
import { cn } from "@/lib/utils";
import { MdArrowUpward } from "react-icons/md";

interface Props {
    className?: string;
    isField?: boolean;
    field: string;
    orderDSC?: boolean;
    table?: boolean;
}

export function ProductOrderByItem({ className, isField, field, orderDSC, table } : Props) {
    return (
        <div className="flex gap-1">
            <MdArrowUpward className={cn(
                "transition-all min-w-6 min-h-6",
                {
                    "rotate-180" : orderDSC,
                    "hidden": !isField,
                    "block": isField,
                    "text-p_golden min-w-5 min-h-5" : table
                },
                className
            )}/>
            <span className={clsx(
                "relative",
                {
                    "left-8": !isField && !table,
                }
            )}>
                { field }
            </span>
        </div>
    )
}