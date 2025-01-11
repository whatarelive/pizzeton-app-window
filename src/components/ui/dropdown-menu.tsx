import type { FC } from "react"
import { cn } from "@/lib/utils"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

export const Root = DropdownMenuPrimitive.Root
export const Trigger = DropdownMenuPrimitive.Trigger
export const Group = DropdownMenuPrimitive.Group
export const Portal = DropdownMenuPrimitive.Portal
export const Sub = DropdownMenuPrimitive.Sub
export const RadioGroup = DropdownMenuPrimitive.RadioGroup

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface DropdownMenuOffsetProps extends Props {
  sideOffset?: number;
}

export const DropdownMenuSubTrigger: FC<Props> = ({ className, children }) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100`,
      className
    )}
  >
    {children}
  </DropdownMenuPrimitive.SubTrigger>
)

export const SubContent: FC<Props> = ({ className, children }) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 
      text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
      data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
      data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
      className
    )}
  >
    {children}
  </DropdownMenuPrimitive.SubContent>
)

export const Content: FC<DropdownMenuOffsetProps> = ({ className, sideOffset = 4, children }) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 
        text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        className
      )}
    >
      { children }
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
)

export const Item: FC<Props> = ({ className, children, onClick }) => (
  <DropdownMenuPrimitive.Item
    onClick={onClick}
    className={cn(
      `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm 
      outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none 
      data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
      className
    )}
  >
    { children }
  </DropdownMenuPrimitive.Item>
)

export const Label: FC<Props> = ({ className, children }) => (
  <DropdownMenuPrimitive.Label className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
    { children }
  </DropdownMenuPrimitive.Label>
)

export const Separator: FC<Props> = ({ className, children }) => (
  <DropdownMenuPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-neutral-100", className)}>
    { children }
  </DropdownMenuPrimitive.Separator>
)

export const Tooltip: FC<Props> = ({ className }) => (
  <div 
    className={cn(
      `absolute border-b-[30px] border-l-[20px] border-r-[20px] border-b-p_gray_900 
      border-l-transparent border-r-transparent`, 
      className
    )}
  />
)