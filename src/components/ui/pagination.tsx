import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import type { PaginationLinkProps } from "@/interfaces";

export function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <Button 
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "destructive" : "outline",
          size,
        }),
        'rounded-none hover:border-r text-p_gray_400 font-bold',
        {
          'hover:text-p_rose_900 hover:border text-white': isActive
        },
        className
      )}
      {...props}
    />
  )
}