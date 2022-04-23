import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>WHY YOU NEED </h6>
          <h3>OUTSOURCING.</h3>
          <span className="tbg">Benefits</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-delete-user"></span>
              <h6>Non-core tasks</h6>
              <p>Your company needs to focus on the more important stuff.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-timer"></span>
              <h6>Time</h6>
              <p>Make your team productive by doing what needs to be done.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-medal"></span>
              <h6>Cost</h6>
              <p>
                Spend only on what is essential and outsource on what is
                beneficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
