import React from "react";

const CardsSkeleton = ({ num = 6 }: { num: number }) => {
  const skeleton = [...Array(num).keys()].map(() => (
    <div className="overflow-hidden transition-shadow duration-300 shadow-xl animate-pulse h-96 card max-w-96 bg-base-200 hover:shadow-2xl">
      <div className="h-64 bg-base-100"></div>

      <div className="p-6 bg-base-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="h-5 rounded-lg w-26 bg-base-100"></h1>
          <div className="h-4 rounded-lg w-14 bg-base-100"></div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="w-12 h-5 rounded-lg bg-base-100"></h1>
          <div className="w-10 h-3 rounded-lg bg-base-100"></div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3"> {skeleton}</div>
  );
};

export default CardsSkeleton;
