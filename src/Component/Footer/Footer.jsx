import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import si_1 from "../../assets/images/si_i.svg";
import si_2 from "../../assets/images/si_x.svg";
import si_3 from "../../assets/images/si_f.svg";
import si_4 from "../../assets/images/si-u.svg";

const Footer = () => {
  return (
    <div className="footer-section mt-5">
      <div className="container">
        <div className="row g-3">
          {/* Single */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="f-widget">
              <h6 className="f-title">Categories</h6>
              <ul>
                <li>
                  <Link to="" className="f-link">
                    Nutrition and diet
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Fitness training
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Mindfulness
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Mental health
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Personal growth
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Social well-being
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="f-widget">
              <h6 className="f-title">About</h6>
              <ul>
                <li>
                  <Link to="" className="f-link">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Our partners
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="f-widget">
              <h6 className="f-title">Resources</h6>
              <ul>
                <li>
                  <Link to="" className="f-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Refund policies
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Cookie
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Latest post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="f-widget">
              <h6 className="f-title">Support</h6>
              <ul>
                <li>
                  <Link to="" className="f-link">
                    Get in touch
                  </Link>
                </li>
                <li>
                  <Link to="" className="f-link">
                    Visit our forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Middle */}
        <div className="f-middle">
          <div className="d-flex justify-content-between">
            <h4>Join our official channels</h4>
            <div className="d-flex gap-3">
              <Link to="">
                <img src={si_1} alt="instagram" />
              </Link>
              <Link to="">
                <img src={si_2} alt="x" />
              </Link>
              <Link to="">
                {" "}
                <img src={si_3} alt="facebook" />
              </Link>
              <Link to="">
                {" "}
                <img src={si_4} alt="" />
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="copyright">
          <p>&copy; 2024 EduPath. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
