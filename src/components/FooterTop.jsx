import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
function FooterTop() {
  return (
    <div className="ftt">
      <div className="row ml-5 mr-5 mt-5  d-flex justify-content-center align-items-center text-center ftt1">
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 mb-5  ">
          <h1
            className=" mt-5 ml-4 d-flex justify-content-start text-left"
            style={{ width: "100%" }}
          >
            Recools
          </h1>
          <p
            className=" ml-3 mt-3 d-flex justify-content-start text-left col-md-9 col-lg-9 col-sm-12"
            style={{ width: "100%" }}
          >
            Recools Is A Platform Connecting The Research Professionals And
            Research Aspirants.
          </p>

          <div className="row mb-5 ml-3 mt-3 ">
            <div className="inline col-xl-8 col-lg-4 col-md-6 col-sm-12">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <div className="row">
                  <li className="nav-item col-lg-2 col-xl-2 col-md-2 col-sm-1 ">
                    <a href="#">
                      <i class="far fa-envelope fa-2x "></i>
                    </a>
                  </li>
                  <li className="nav-item col-lg-2 col-xl-2 col-md-2 col-sm-1 ">
                    <a href="#">
                      <i
                        class="fab fa-linkedin-in
                fa-2x  "
                      ></i>
                    </a>
                  </li>
                  <li className="nav-item col-lg-2 col-xl-2 col-md-2 col-sm-1">
                    <a href="#">
                      <i class="fab fa-instagram fa-2x  "></i>
                    </a>
                  </li>
                  <li className="nav-item col-lg-2 col-xl-2 col-md-2 col-sm-1">
                    <a href="#">
                      <i class="fab fa-twitter fa-2x  "></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-3 col-12 mb-5"></div>
        <div className="col-xl-5 col-lg-9 col-md-9 col-sm-9 col-12 mt-5 mb-5">
          <h4 className=" text-start font-weight-bold col-8">
            Frequently Asked Questions
          </h4>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <div className="row mt-5">
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - Privacy & Security
                </a>
              </li>
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - Terms of Services
                </a>
              </li>
            </div>
            <div className="row">
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - How It Works
                </a>
              </li>
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - For Candidates
                </a>
              </li>
            </div>
            <div className="row">
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - For Professors
                </a>
              </li>
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - For Employers
                </a>
              </li>
            </div>
            <div className="row">
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-4 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - Contact Us
                </a>
              </li>
              <li className="nav-item col-lg-6 col-xl-5 col-md-6 col-sm-1 ">
                <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                  {" "}
                  - Support
                </a>
              </li>
            </div>
          </ul>
          <div className="row mt-5 d-flex justify-content-center align-items-center text-center ">
            {" "}
            {/* <div className="col-md-8 col-lg-8 col-sm-10">
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - Privacy & Security
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - How It Works
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - For Professors
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - Contact Us
              </a>
            </div> */}
            {/* <div className="col-md-8 col-lg-6 col-sm-10">
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - Terms of Services
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - For Candidates
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - For Employers
              </a>
              <a href="#" className="d-flex justify-content-start mr-5 mb-3">
                {" "}
                - Support
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
