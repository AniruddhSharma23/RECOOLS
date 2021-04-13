import React from "react";

function Content5() {
  return (
    <div className="content5">
      <div className="d-flex flex-column ">
        <div className="row">
          {" "}
          <h1 className="d-flex justify-content-center align-items-center font-weight-bolder text-uppercase mt-5 mb-5 col-12">
            Key Players
          </h1>
        </div>

        <div className="d-flex justify-content-center align-items-center players row mb-5">
          <div className="col-md-6 col-lg-4 col-sm-12 keyp1 mt-5">
            <div className="keyp">
              <div className="d-flex justify-content-center align-items-center ">
                <i className="fas fa-user-graduate fa-4x mt-5"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <h3 className="mt-5 mb-3 text-uppercase text-center">
                  Students
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 keyp1 mt-5">
            <div className="keyp">
              <div className="d-flex justify-content-center align-items-center ">
                <i className="fas fa-user-tie fa-4x mt-5"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <h3 className="mt-5 mb-3 text-uppercase text-center">
                  Professors
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-122 keyp1 mt-5">
            <div className="keyp">
              <div className="d-flex justify-content-center align-items-center ">
                <i className="fas fa-user-tie fa-4x mt-5"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <h3 className="mt-5 mb-3  text-center text-uppercase">
                  Corporates
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content5;
