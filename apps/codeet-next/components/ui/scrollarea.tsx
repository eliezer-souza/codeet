import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import React from 'react';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps;

export function ScrollArea({ ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      type="auto"
      className="w-full h-56 overflow-hidden bg-white"
      {...props}
    />
  );
}

ScrollArea.Viewport = React.forwardRef<
  HTMLDivElement,
  ScrollAreaPrimitive.ScrollAreaViewportProps
>(function ScrollAreaViewport({ className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Viewport
      ref={ref}
      className="w-full h-full"
      {...props}
    />
  );
});

ScrollArea.Scrollbar = React.forwardRef<
  HTMLDivElement,
  ScrollAreaPrimitive.ScrollAreaScrollbarProps
>(function ScrollAreaViewport({ className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      ref={ref}
      className="flex rounded-md select-none w-3 touch-none p-1 bg-slate-200 transition-colors hover:bg-slate-300 data-[orientation=vertical]:hover:w-3 data-[orientation=horizontal]:hover:h-3 data-[orientation=horizontal]:hover:flex-col"
      {...props}
    />
  );
});

ScrollArea.Thumb = React.forwardRef<
  HTMLDivElement,
  ScrollAreaPrimitive.ScrollAreaThumbProps
>(function ScrollAreaThumb({ className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Thumb
      ref={ref}
      className="flex-1 bg-slate-400 rounded-md relative translate-x-2/4 w-full h-full before:content-[''] before:absolute before:top-1/2 before:left-1/2"
      {...props}
    />
  );
});

ScrollArea.Corner = React.forwardRef<
  HTMLDivElement,
  ScrollAreaPrimitive.ScrollAreaCornerProps
>(function ScrollAreaCorner({ className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Corner ref={ref} className="bg-slate-400" {...props} />
  );
});
