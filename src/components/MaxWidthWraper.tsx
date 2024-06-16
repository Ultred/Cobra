import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthWrapperProps = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWraper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("h-full mx-auto max-w-screen-xl px-3", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWraper;
