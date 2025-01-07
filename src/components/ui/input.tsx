import { cn } from "@/lib/utils";
import type { FC, ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    children?: React.ReactNode;
}

export const Input: FC<Props> = ({ className, type, children, ...props }) => {
  return (
    <div className={cn(
      `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors
      focus-within:outline-none focus-within:ring-2 focus-within:ring-p_blue focus-within:text-p_blue group-placeholder:text-p_gray_900
      group-disabled:cursor-not-allowed group-disabled:opacity-50`,
      className
    )}>
      { children }
      
      <input type={type} {...props}  className="focus-within:outline-none focus-within:ring-0 w-full"/>
    </div>
  )
}
