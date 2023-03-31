import React from "react";

const Loading = () => {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-red-800"></div>
    </div>
  );
};

export default Loading;
