import React from "react";

const Tags = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit rounded-full px-3 py-1 font-medium text-xs bg-lime-400/10 text-lime-300 sm:text-base sm:px-4 sm:py-2 lg:text-sm lg:py-1.5 lg:px-3.5 xl:px-5 xl:py-2.5 xl:text-base 2xl:text-3xl 2xl:px-8 2xl:py-4">
      {children}
    </div>
  );
};

export default Tags;
