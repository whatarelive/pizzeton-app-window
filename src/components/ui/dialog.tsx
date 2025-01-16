import type { FC, ComponentPropsWithoutRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay: FC<ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>> = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
)

export const DialogContent: FC<ComponentPropsWithoutRef<typeof DialogPrimitive.Content>> = ({ className, children, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-6 shadow-lg rounded-lg
        duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 
        data-[state=open]:slide-in-from-top-[48%]`,
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
)

export const DialogHeader: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center", className)} {...props} />
)

export const DialogFooter: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse", className)} {...props}/>
)

export const DialogTitle: FC<ComponentPropsWithoutRef<typeof DialogPrimitive.Title>> = ({ className, ...props }) => (
  <DialogPrimitive.Title
    className={cn( "text-lg font-semibold leading-none tracking-tight", className )}
    {...props}
  />
)

export const DialogDescription: FC<ComponentPropsWithoutRef<typeof DialogPrimitive.Description>> = ({ className, ...props }) => (
  <DialogPrimitive.Description
    className={cn("text-sm text-neutral-500", className)}
    {...props}
  />
)