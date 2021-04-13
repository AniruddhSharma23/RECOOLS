import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div className="bg-white">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: "100px" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand font-weight-bold text-uppercase display-4"
          href="#"
        >
          <h3 className=" font-weight-bold text-primary"> Recools</h3>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
            <li className="nav-item active">
              <Button variant="outline-primary" className="mr-3 btn-lg" active>
                Home
              </Button>{" "}
            </li>
            <li className="nav-item">
              <Button
                variant="outline-primary"
                className="mr-3 btn-lg"
                style={{ outline: "none" }}
              >
                Feed
              </Button>{" "}
            </li>
            <li className="nav-item">
              <Button variant="outline-primary" className="mr-3 btn-lg">
                About Us
              </Button>{" "}
            </li>
            <li className="nav-item">
              <Button variant="outline-primary" className="mr-3 btn-lg">
                Contact Us
              </Button>{" "}
            </li>
          </ul>
          <div className="inline">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Button
                  variant="outline-primary"
                  className="mr-3 btn-lg"
                  active
                >
                  Dashboard
                </Button>{" "}
              </li>
              <li className="nav-item">
                <Button
                  variant="outline-primary"
                  className="mr-3 btn-lg"
                  active
                >
                  Logout
                </Button>{" "}
              </li>
              <li className="nav-item">
                <a href="#" class="pull-left">
                  <img
                    src="https://freepikpsd.com/wp-content/uploads/2019/10/person-logo-png-3.png"
                    style={{ height: "50px", width: "50px" }}
                    className=" ml-4"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
