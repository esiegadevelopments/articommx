import React from "react";
import Link from "next/link";

const Banner = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/freelancer.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>Alex Smith</h1>
              <h4>UI &amp; UX Designer</h4>
              <Link href="/works3/works3-dark">
                <a className="btn-curve btn-color btn-radius mt-30">
                  <span>Discover Work</span>
                </a>
              </Link>
              <div className="social-icon">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
