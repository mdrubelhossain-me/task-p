import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import p1 from '../../assets/images/bg.jpg'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="left-side">
                <div className="d-flex gap-1">
                  <div className="d-flex gap-2 rating">
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <span>4.9</span>
                  </div>
                  <div className="review">
                    <span>(566)</span>
                  </div>
                </div>
                <h2 className="title">
                  #1 Platform <br /> Powering Health <br /> and Wellness
                </h2>
                <h6>
                  We’re restoring home as the primary <br /> place of personal
                  well-being
                </h6>
                <p>
                  Health is not just about what you're eating. It's also <br />{" "}
                  about what you're thinking and saying
                </p>
                <div className="btn-area">
                  <Link to="" className="myBtn">
                    Bowse Courses
                  </Link>
                  <Link to="" className="myBtn_2 mx-3">
                    Get Started
                  </Link>
                </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 right-side">
            <div className="right-box">
              
              <div className="bottom-content">
                <div className="feedback">
                    <div>
                        <h1>12,000+</h1>
                    </div>
                    <div className="line"></div>
                    <div>
                        <p>Happy learners rely on us regularly</p>
                    </div>
                </div>
                <div className="wellbeing">
                        <h6>Find your wellbeing</h6>
                        <p>By prioritizing self-care and making informed choices, one can enhance their overall quality of life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
