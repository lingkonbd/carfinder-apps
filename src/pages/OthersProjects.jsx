import React from "react";
import { BiCategory } from "react-icons/bi";
import DynamicBanner from "../components/Shared/DynamicBanner";

const OthersProjects = () => {
  return (
    <div>
      <div>
        <DynamicBanner title="Others Projects" />
        <div className="container py-12">
          <h2 className="text-4xl font-bold mb-8 text-center title__before">
            <span className="px-6">
              <BiCategory className="mr-3 inline-block text-primary"></BiCategory>
              Others Projects
            </span>
          </h2>
          <h2 className="text-4xl font-bold mb-8 text-center title__before">
            <span className="px-6">
              Coming Soon.......
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OthersProjects;
