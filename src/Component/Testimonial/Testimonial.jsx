import React from "react";
import "./Testimonial.css";
import man_1 from "../../assets/images/courses/man_1.png";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section pt-5 pb-5">
      <div className="text-center">
        <h2 className="title">
          Learners love EduPath. See why they rate us 4.9 out of 5
        </h2>
      </div>
      <div className="row g-3 mt-4">
        <Slider {...settings}>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                I love the interactive elements and the community forums where I
                can connect with other learners."
              </p>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                “The mindfulness courses have helped me manage stress better and
                find balance in my daily life. The guided meditations are a
                highlight! The courses are well worth the investment and have
                made a positive impact on my life."
              </p>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                "A fantastic platform with a wide variety of health and wellness
                courses. The instructors are top-notch, and the content is very
                engaging."
              </p>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                It's not just about physical health but mental and emotional
                well-being too."
              </p>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                "I love the flexibility of the courses. I can learn at my own
                pace and revisit the material whenever I need to."
              </p>
            </div>
          </div>
          {/* Single */}
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="t-card">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <div className="photo">
                  <img src={man_1} alt="" />
                </div>
                <p>
                  <i class="bi bi-quote"></i>
                </p>
              </div>
              <h6>Kilian Murphe</h6>
              <p className="speech">
                "A fantastic platform with a wide variety of health and wellness
                courses. The instructors are top-notch, and the content is very
                engaging."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
