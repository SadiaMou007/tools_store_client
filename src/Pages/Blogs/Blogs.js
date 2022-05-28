import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

const Blogs = () => {
  return (
    <div className="mx-12">
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          How to improve the performance of react application?
        </h2>
        <h4 className="text-xl">
          {" "}
          Performance of any application needs to optimize for good user
          experience. Here provide some important ways to improve react
          application performance:
          <div className="">
            <ul>
              <li>
                Prevent un-necessary re render of components. Use common hooks
                for re-rendered components
              </li>
              <li>Use lazy loading for images</li>
              <li>Use code-splitting using dynamic import </li>
              <li>Use optimized images and files</li>
            </ul>
          </div>
        </h4>
      </div>

      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          What are the different ways to manage a state in a React application?
        </h2>

        <p className="text-xl m-2">
          React state contain information for react component. Most common way
          to manage data is using react hooks. Such as, React use effect hook
          contain certain change of state, useEffect hook manage the side
          effect. <br />
          React context can manage react application state which also reduce
          props drilling. <br />
          Redux library also can manage props drilling and handle states
          behaviour.
        </p>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          How does prototypical inheritance work?
        </h2>
        <p className="m-2 text-xl">
          Prototypical inheritance used for add method and properties in
          javascript.In this process one object inherit its methods and
          properties to another object by using set and get protoTypes of
          object.{" "}
        </p>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h2>
        <p className="m-2 text-xl">
          Use state hook use one variable and a function that change the
          variable value according to component change. If we set data into
          products instead of setProducts the data will not change when change
          product data. But if we set data to setProduct this function will
          update further and pass the data to products variable.
        </p>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
        <p className="p-2 text-xl">
          1. set useState with initial empty value <br /> 2. for each index of
          products array <br /> 3. if product[i].name === 'search text' <br />{" "}
          4. set useState value <br /> 5. break loop
        </p>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-xl font-bold mt-3 mb-2">
          <QuestionMarkCircleIcon className="h-12 w-12 text-secondary-500 me-2 inline-block" />
          What is a unit test? Why should write unit tests?
        </h2>
        <p className="p-2 text-xl">
          Unit test is a process of check the quality of code. Before deploy any
          application unit test ensure the reliability of application and its
          coding standard. So that, unit test helps to write better code for
          efficient output.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
