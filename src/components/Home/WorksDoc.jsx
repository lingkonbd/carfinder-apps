import React from "react";

const WorksDoc = () => {
  return (
    <div className="works-doc py-10">
      <div className="container">
        <div class="max-w-5xl mx-auto text-center my-8">
          <h1 class="text-3xl py-2  font-bold text-center">
            <span class="text-[#010C3A]">HOW IT WORKS</span>
          </h1>
          <p>
            Enjoy the ultimate web design themes. We are working hard to brings
            new advanced design interfaces to Joomla and WordPress that both
            beginners and experts will fall in love with.
          </p>
        </div>

        <div className="text-center border-4  border-[#010C3A] rounded-sm p-12 bg-[#df0303] text-white max-w-md mx-auto">
          <h2 class="phone-title text-xl text-white">
            Have a question? Call us{" "}
          </h2>
          <a href="/" class="phone-number text-white text-4xl font-bold ">
            +1-888-335-3567{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksDoc;
