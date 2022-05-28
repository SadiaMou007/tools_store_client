import React from "react";

const Portfolio = () => {
  return (
    <div className="w-3/4 mx-auto mt-12 mb-24 text-xl p-3">
      <h1 className="my-4 shadow-md p-2 text-center font-bold">
        {" "}
        MY PORTFOLIO
      </h1>
      <h2 className="my-4">
        <span className="font-bold">Name:</span> Sadia Islam
      </h2>
      <h2 className="my-4">
        <span className="font-bold">Email:</span> sadia.bu.cse@gmail.com
      </h2>
      <h2 className="my-4">
        <span className="font-bold">Education:</span> B.S.C in Computer Science
        and Engineering, University of Barisal <br />
      </h2>
      <h2 className="my-3">
        <span className="font-bold"></span>
        <table className="table w-full">
          <thead>
            <th className="text-xl">#</th>
            <th>
              <h3 className="text-xl">Technology</h3>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <span>Front-end:</span>
              </td>
              <td> HTML, CSS, SCSS, REACT, TAILWIND,BOOTSTRAP</td>
            </tr>
            <tr>
              <td>
                {" "}
                <span>Back-end:</span>
              </td>
              <td> NODEJS EXPRESS.JS</td>
            </tr>
            <tr>
              <td>
                {" "}
                <span>Version Control:</span>
              </td>

              <td> GIT, GITHUB</td>
            </tr>
          </tbody>
        </table>
      </h2>
      <div className="my-4">
        <span className="font-bold mb-6">Projects</span>
        <div className="flex p-4 shadow-md items-center">
          <h2 className="me-6">Todo app</h2>
          <div className="m-3">
            {" "}
            <a
              href="https://todo-list-5c001.web.app/"
              className="text-blue-500 underline"
            >
              {" "}
              live-link
            </a>
            (Todo app with ReactJS, Bootstrap, firebase authentication and
            mongodb database )
          </div>
        </div>
        <div className="flex p-4 shadow-md items-center">
          <h2 className="me-6">Car Manager</h2>
          <div className="m-3">
            {" "}
            <a
              href="https://car-manager-9a097.web.app/"
              className="text-blue-500 underline"
            >
              {" "}
              live-link
            </a>
            (Car management system for car dealers with ReactJS, Bootstrap,
            firebase authentication and mongodb database )
          </div>
        </div>
        <div className="flex p-4 shadow-md items-center">
          <h2 className="me-6">Travel World</h2>
          <div className="m-3">
            {" "}
            <a
              href="https://travel-world-97d79.web.app/"
              className="text-blue-500 underline"
            >
              {" "}
              live-link
            </a>
            ( ReactJS application with react-router, react-hooks, animations,
            Bootstrap and firebase authentication system )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
