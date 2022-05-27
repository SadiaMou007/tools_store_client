import React from "react";

const Blogs = () => {
  return (
    <div className="mx-12">
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-2xl mt-3 mb-2">
          Q1: How to improve the performance of react application?
        </h2>
        <h4 className="text-xl">
          {" "}
          Performance of any application needs to optimize for good user
          experience. Here provide some important ways to improve react
          application performance:
          <div className="ms-12">
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
        <h2 className="text-2xl mt-3 mb-2">
          Q2: What are the different ways to manage a state in a React
          application?
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
        <h2 className="text-2xl mt-3 mb-2">
          Q3: How does prototypical inheritance work?
        </h2>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-2xl mt-3 mb-2">
          Q4:Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h2>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-2xl mt-3 mb-2">
          Q5: You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
      </div>
      <div className="my-4 bg-secondary p-3">
        <h2 className="text-2xl mt-3 mb-2">
          Q6: What is a unit test? Why should write unit tests?
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
