import React from "react";
import { Nav, Button } from "react-bootstrap";
function Content1() {
  return (
    <div className="bg1 content1">
      <div
        className="d-flex justify-content-center align-items-center row"
        style={{ height: "100%", width: "100%" }}
      >
        <blockquote class="blockquote  col-xl-6 col-lg-12 col-md-12 col-sm-12  ">
          <p
            className="mb-0 font-weight-bolder text-uppercase para ml-3 mr-3"
            style={{ height: "100%", width: "100%" }}
          >
            THE COMMON FACTS OF TODAY ARE THE PRODUCTS OF YESTERDAY’S RESEARCH
          </p>
          <footer
            style={{ height: "100%", width: "100%" }}
            className="ml-3 mr-3"
          >
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <ul className="navbar-nav  mt-2 mt-lg-10 ml-auto col-xl-5 col-lg-12 col-md-12 col-sm-12 ">
          <div
            className="row d-flex justify-content-center text-center"
            style={{ width: "100%" }}
          >
            {" "}
            <li className="nav-item col-lg-6 col-md-6 col-sm-12 mt-2 mb-2">
              <Button variant="outline-primary" className="mr-3 btn-lg" active>
                Search Professors
              </Button>{" "}
            </li>
            <li className="nav-item mt-2 mb-2 col-lg-6 col-md-6 col-sm-12 ">
              <Button variant="outline-primary" className="mr-3 btn-lg" active>
                Search Opprotunities
              </Button>{" "}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Content1;
