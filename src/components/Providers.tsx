'use client';

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type Providers = {
  children: ReactNode;
};

export default function Providers({ children }: Providers) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  )
};
