import React from "react";
import { Nav, Button } from "react-bootstrap";

function Content2() {
  return (
    <div className="content2 row">
      <div className="col col-md-12 col-lg-5 col-sm-3 ml-3  ">
        <p
          className="mb-0 font-weight-medium d-flex align-items-center ml-5 mr-5 mt-5 mb-5 "
          style={{ height: "100%" }}
        >
          Recools bridges the gap between students and Professionals across the
          world to provide them opportunities in the research domain.
        </p>
      </div>

      <div className="col col-md-12 col-lg-6 col-sm-3 d-flex justify-content-center text-start align-items-center  ">
        <img
          src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617062400"
          className=" mt-5 mb-5 ml-5 mr-5"
        ></img>
      </div>
    </div>
  );
}

export default Content2;
