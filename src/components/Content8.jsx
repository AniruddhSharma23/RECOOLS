import React from "react";
import { Nav, Button } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Content8() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      className="col-12  d-flex justify-content-center align-items-center  text-center "
      onDragStart={handleDragStart}
      style={{ width: "100%" }}
    >
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ml-5 mr-5">
        <Button className="row  mt-5 mb-5 b8" style={{ width: "100%" }} active>
          <p className="font-weight-medium d-flex justify-content-center align-items-center  text-center mt-5 ml-5 mr-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Button>
        <div className="row ml-5 mr-5  mb-5 d-flex justify-content-center align-items-center  text-center">
          <div className="row d-flex justify-content-center align-items-center  text-center">
            <i
              className="far fa-user fa-4x d-flex justify-content-center align-items-center text-center "
              style={{ width: "100%" }}
            ></i>
            <h3
              className="d-flex justify-content-center align-items-center text-center font-weight-medium mt-3"
              style={{ width: "100%" }}
            >
              Gaurav Chauhan
            </h3>
            <h5
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              Student
            </h5>
            <h4
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              IIT Kharagpur
            </h4>
          </div>
        </div>
      </div>
    </div>,

    <div
      className="col-12  d-flex justify-content-center align-items-center  text-center "
      onDragStart={handleDragStart}
      style={{ width: "100%" }}
    >
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ml-5 mr-5 ">
        <Button className="row mt-5 mb-5 b8" style={{ width: "100%" }} active>
          <p className="font-weight-medium d-flex justify-content-center align-items-center  text-center mt-5 ml-5 mr-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Button>
        <div
          className="row   mb-5 d-flex justify-content-center align-items-center  text-center"
          style={{ width: "100%" }}
        >
          <div className="row d-flex justify-content-center align-items-center  text-center">
            <i
              className="far fa-user fa-4x d-flex justify-content-center align-items-center text-center "
              style={{ width: "100%" }}
            ></i>
            <h3
              className="d-flex justify-content-center align-items-center text-center font-weight-medium mt-3"
              style={{ width: "100%" }}
            >
              Gaurav Chauhan
            </h3>
            <h5
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              Student
            </h5>
            <h4
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              IIT Kharagpur
            </h4>
          </div>
        </div>
      </div>
    </div>,
    <div
      className="col-12  d-flex justify-content-center align-items-center  text-center "
      onDragStart={handleDragStart}
      style={{ width: "100%" }}
    >
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ml-5 mr-5">
        <Button className="row  mt-5 mb-5 b8" style={{ width: "100%" }} active>
          <p className="font-weight-medium d-flex justify-content-center align-items-center  text-center mt-5 ml-5 mr-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Button>
        <div className="row ml-5 mr-5  mb-5 d-flex justify-content-center align-items-center  text-center">
          <div className="row d-flex justify-content-center align-items-center  text-center">
            <i
              className="far fa-user fa-4x d-flex justify-content-center align-items-center text-center "
              style={{ width: "100%" }}
            ></i>
            <h3
              className="d-flex justify-content-center align-items-center text-center font-weight-medium mt-3"
              style={{ width: "100%" }}
            >
              Gaurav Chauhan
            </h3>
            <h5
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              Student
            </h5>
            <h4
              className="d-flex justify-content-center align-items-center text-center font-weight-medium"
              style={{ width: "100%" }}
            >
              IIT Kharagpur
            </h4>
          </div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="content8">
      <div className="row">
        <h1 className="d-flex justify-content-center align-items-center font-weight-bolder text-uppercase mt-5  col-12">
          Testinomials
        </h1>
      </div>
      <div className="row">
        <h4 className="d-flex justify-content-center align-items-center  text-uppercase mt-2 mb-5 col-12">
          Few words from candidates
        </h4>
      </div>
      <div className="row ">
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
}

export default Content8;
