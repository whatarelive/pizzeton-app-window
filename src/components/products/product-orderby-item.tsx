import clsx from "clsx";
import { cn } from "@/lib/utils";
import { MdArrowUpward } from "react-icons/md";

interface Props {
    className?: string;
    isField?: boolean;
    field: string;
    orderDSC?: boolean;
}

export function ProductOrderByItem({ className, isField, field, orderDSC } : Props) {
    return (
        <>
            <MdArrowUpward className={cn(
                "transition-all min-w-6 min-h-6",
                {
                    "rotate-180" : orderDSC,
                    "hidden": !isField,
                    "block": isField,
                },
                className
            )}/>
            <span className={clsx(
                "relative",
                {
                    "left-8": !isField,
                }
            )}>
                { field }
            </span>
        </>
    )
}