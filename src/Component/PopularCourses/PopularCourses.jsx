import React from "react";
import "./PopularCourses.css";
import p1 from "../../assets/images/courses/course-1.jpg";
import icon_1 from "../../assets/images/courses/clock.svg";
import icon_2 from "../../assets/images/courses/lesson.svg";
import man_1 from "../../assets/images/courses/trainer-1.png";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  return (
    <div className="popular-courses pt-5 pb-5 mt-2">
      <div className="container">
        <div>
          <h2 className="title">Our Popular Courses</h2>
          <p className="sub-title">
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance
          </p>
        </div>
        <div class="row g-3 mt-4">
          {/* Single  */}
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="course-item">
              {/* Thumbnail  */}
              <div class="course-thumbnail">
                <div class="img">
                  <a href="product-details.html">
                    <img src={p1} alt="product" />
                  </a>
                </div>
                <div className="d-flex gap-2 icon-area">
                  <button class="icon">
                    <i class="bi bi-cart"></i>
                  </button>
                  <button class="icon">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
              <div class="course-content">
                <div className="d-flex gap-2">
                  <div className="level">
                    <p>Beginner</p>
                  </div>
                  <div className="subject">
                    <p>Nutrition and Diet</p>
                  </div>
                </div>
                <Link to="" className="course-name">
                  Foundation of Sleep: Sleep Science and Sleep Disorders
                </Link>
                <div className="d-flex gap-1 align-items-center mt-2">
                  <div className="d-flex gap-2 align-items-center rating">
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <span className="d-block">4.9</span>
                  </div>
                  <div className="review">
                    <span>(566)</span>
                  </div>
                </div>


                <div className=" dl-area">
                    <div className="duration">
                        <img src={icon_1} alt="" />
                        <p>6h</p>
                        <p>34m</p>
                    </div>
                    <div className="line"></div>
                    <div className="lessons">
                        <img src={icon_2} alt="" />
                        <p>3</p>
                        <p>lessons</p>
                    </div>
                </div>


                <div className="d-flex justify-content-between align-items-center bottom-section">
                    <div className="d-flex align-items-center gap-2">
                    <div className="photo">
                        <img src={man_1} alt="" />
                    </div>
                    <h6>Killian Murphe</h6>
                    </div>
                    <h5>$24</h5>
                </div>








              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
