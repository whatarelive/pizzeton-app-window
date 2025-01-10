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