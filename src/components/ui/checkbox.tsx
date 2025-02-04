import { ComponentProps, type FC } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { MdCheck } from "react-icons/md";
import { cn } from "@/lib/utils";

export const Checkbox: FC<ComponentProps<typeof CheckboxPrimitive.Root>> = ({ className, ...props }) => (
  <CheckboxPrimitive.Root
    className={cn(
      `peer h-5 w-5 shrink-0 rounded-sm border border-neutral-200 ring-offset-white focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed 
      disabled:opacity-50`,
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <MdCheck className="h-4 w-4 text-p_rose_300" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
)
