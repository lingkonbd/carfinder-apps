import React from "react";
import DynamicBanner from "./Shared/DynamicBanner";

const Blogs = () => {
  return (
    <>
      <DynamicBanner title="Blogs" />
      <div className=" my-14">
        <div className="container">
          <h2 className="text-center my-8 text-[#232F4B] text-5xl font-bold ">
            Faq
          </h2>
          <div
            tabIndex="0"
            className="collapse mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              1. What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content">
              <p>
                Every React component has a built-in state. This state is an
                object which stores the property values that belong to a
                component. State is able to keep data from different components
                in-sync because each state update re-renders all relevant
                components.
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              2. How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p>
                The Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              3. What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content">
              <p>
                Unit test: Unit Testing is a type of software testing where
                individual units or components of a software are tested.
              </p>
              <p>
                {" "}
                Unit testing ensures that all code meets quality standards before
                it's deployed. This ensures a reliable engineering environment
                where quality{" "}
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse mb-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              4. React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
              <h2 className="text-3xl">React</h2>
              <ol>
                <li>
                  {" "}
                  Virtual DOM implementation and various rendering optimizations
                  make it too fast.{" "}
                </li>
                <li> One way data binding available with less complexity.</li>
                <li>Migration between versions is effortless. </li>
                <li> Best choice for cross-platform and mobile apps.</li>
              </ol>
              <h2 className="text-3xl">Angular</h2>
              <ol>
                <li>Angular uses HTML and CSS. </li>
                <li>
                  {" "}
                  Suitable for detailed documentation, large scale, and productive
                  applications.
                </li>
                <li>Google long term support available. </li>
                <li>Best choice for TS and OOP lovers. </li>
              </ol>
              <h2 className="text-3xl">Vue</h2>
              <ol>
                <li>
                  {" "}
                  It is easily integrated, lightweight, and easy to learn for a
                  beginner.{" "}
                </li>
                <li> Vue support both one way and two-way data binding.</li>
                <li> Provides better performance, comparing to others.</li>
                <li> For small projects, Vue is the best option. </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
