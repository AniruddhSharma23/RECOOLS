import React from "react";

function Content3() {
  return (
    <div className="content3 row ">
      <div className="col col-md-12 col-lg-6 col-sm-3    mb-0 ">
        <h2 className="text-center font-weight-bold c3">How it works</h2>
      </div>
      <div className="col col-md-12 col-lg-6 col-sm-3 d-flex justify-content-center text-start align-items-center ml-1 ">
        <img
          src="https://image.freepik.com/free-vector/woman-working-typing-sending-messages_74855-7941.jpg"
          className="  mb-5 ml-2 mr-2"
        ></img>
      </div>
      <div className="col col-md-12 col-lg-5 col-sm-3 ml-3 d-flex justify-content-center text-start align-items-center ">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-10 ml-auto font-weight-medium  ">
          <li
            className="nav-item mt-5   font-weight-medium"
            style={{ width: "100%" }}
          >
            <i class="fas fa-check-circle  mr-3"></i>
            Register at Recools.com
          </li>
          <li
            className="nav-item mt-5   font-weight-medium "
            style={{ width: "100%" }}
          >
            <i class="fas fa-check-circle  mr-3"></i>
            Make your profile as per your interest
          </li>
          <li
            className="nav-item mt-5  font-weight-medium "
            style={{ width: "100%" }}
          >
            <i class="fas fa-check-circle  mr-3"></i>
            Search for the opportunities
          </li>
          <li
            className="nav-item mt-5 mb-5  font-weight-medium "
            style={{ width: "100%" }}
          >
            <i class="fas fa-check-circle  mr-3"></i>
            Apply for appropriate opportunity
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content3;
