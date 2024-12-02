import React from "react";
import "./PopularCourses.css";
import { Link } from "react-router-dom";
import p1 from "../../assets/images/courses/course-1.jpg";
import p2 from "../../assets/images/courses/course-2.jpg";
import p3 from "../../assets/images/courses/course-3.jpg";
import p4 from "../../assets/images/courses/course-4.jpg";
import icon_1 from "../../assets/images/courses/clock.svg";
import icon_2 from "../../assets/images/courses/lesson.svg";
import man_1 from "../../assets/images/courses/man_1.png";
import man_2 from "../../assets/images/courses/man_2.jpg";
import man_3 from "../../assets/images/courses/man_3.jpg";
import man_4 from "../../assets/images/courses/man_4.jpg";
import Slider from "react-slick";

const PopularCourses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="bi bi-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="bi bi-chevron-right"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

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
          <Slider {...settings}>
            {/* Single  */}
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="course-item">
                {/* Thumbnail  */}
                <div class="course-thumbnail">
                  <div class="img">
                    <Link to="">
                      <img src={p1} alt="course_1" />
                    </Link>
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
            {/* Single  */}
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="course-item">
                {/* Thumbnail  */}
                <div class="course-thumbnail">
                  <div class="img">
                    <Link to="">
                      <img src={p2} alt="course_2" />
                    </Link>
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
                      <p>Intermediate</p>
                    </div>
                    <div className="subject">
                      <p>Nutrition and Diet</p>
                    </div>
                  </div>
                  <Link to="" className="course-name">
                    Parenting in the Digital Age: Navigating Screen Time
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
                        <img src={man_2} alt="" />
                      </div>
                      <h6>Sarah Hopkins</h6>
                    </div>
                    <h5>$50</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Single  */}
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="course-item">
                {/* Thumbnail  */}
                <div class="course-thumbnail">
                  <div class="img">
                    <Link to="">
                      <img src={p3} alt="course_3" />
                    </Link>
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
                    Holistic Health: Integrating Mind, Body, and Spirit
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
                        <img src={man_3} alt="" />
                      </div>
                      <h6>Luna Karim</h6>
                    </div>
                    <h5 className="d-none">$50</h5>
                    <p className="enrolled m-0">
                      <span>
                        <i class="bi bi-check-circle-fill"></i>
                      </span>
                      <span>Enrolled</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Single  */}
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="course-item">
                {/* Thumbnail  */}
                <div class="course-thumbnail">
                  <div class="img">
                    <Link to="">
                      <img src={p4} alt="course_4" />
                    </Link>
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
                    Introduction to healthy Diet and Nutrition
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
                        <img src={man_4} alt="" />
                      </div>
                      <h6>Kate Winslate</h6>
                    </div>
                    <h5>$40</h5>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
