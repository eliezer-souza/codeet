'use client';

import {
  Toaster as ReactHotToaster,
  ToasterProps as ReactHotToasterProps,
  toast as reactHotToast
} from 'react-hot-toast';

type ToasterProps = ReactHotToasterProps;

export default function Toaster({ children, ...props }: ToasterProps) {
  return (
    <ReactHotToaster position="top-center" {...props}>
      {children}
    </ReactHotToaster>
  );
}

export const toast = reactHotToast;