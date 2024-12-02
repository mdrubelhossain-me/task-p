import React from "react";
import "./Services.css";
import p1 from '../../assets/images/Vector_2.svg'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-section pt-5 pb-5">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h2 className="title">We provide...</h2>
            <div className="services-offer">
              <div className="d-flex gap-4 list">
                <span className="d-block m-0">
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                <p>Personalized routine</p>
              </div>
              <div className="d-flex gap-4 list">
                <span className="d-block m-0">
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                <p>Follow-up after completing courses</p>
              </div>
              <div className="d-flex gap-4 list">
                <span className="d-block m-0">
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                <div>
                  <p>Access to additional resources</p>
                  <span className="desc">
                    We offer access to a variety of additional resources to
                    enhance your experience, including exclusive tools, guides,
                    and support materials designed to help you achieve your
                    goals more effectively.
                  </span>
                </div>
              </div>
              <div className="d-flex gap-4 list">
                <span className="d-block m-0">
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                <p>Free community support</p>
              </div>
              <div className="mt-4">
                <Link className="myBtn_2">Learn More About Our Services</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="right-box">
              <div className="vector">
                <img src={p1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
