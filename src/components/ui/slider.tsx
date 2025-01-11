import type { FC, ElementType } from "react";
import { Root, Thumb, Track, Range } from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";


type Props  = {
  className?: string;
} & ElementType<typeof Root>

export const Slider: FC<Props> = ({ className, ...props }) => (
  <Root className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100">
      <Range className="absolute h-full bg-neutral-900" />
    </Track>
    <Thumb className={`block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white ring-offset-white 
      transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
      focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`} 
    />
  </Root>
)
