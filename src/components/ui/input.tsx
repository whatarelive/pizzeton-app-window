import { cn } from "@/lib/utils";
import type { FC, ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    children?: React.ReactNode;
}

export const InputWithIcon: FC<Props> = ({ className, type, children, ...props }) => {
  return (
    <div className={cn(
      `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors
      focus-within:outline-none focus-within:ring-2 focus-within:ring-p_blue text-p_gray_600 focus-within:text-p_blue group-placeholder:text-p_gray_900
      group-disabled:cursor-not-allowed group-disabled:opacity-50`,
      className
    )}>
      { children }
      
      <input type={type} {...props}  className="focus-within:outline-none focus-within:ring-0 w-full"/>
    </div>
  )
}

export const Input: FC<{label: string} & Props> = ({ className, label, type, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="font-semibold text-base text-p_gray_200">
        { label }
      </label>
      <input type={type} id={props.name} {...props} className={cn(
        `h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors
        focus:outline-none text-p_gray_600 placeholder:text-p_gray_900 disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}/>
    </div>
  )
}
