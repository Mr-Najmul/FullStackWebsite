import React from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div style={{ maxHeight: "90vh" }} className="carousel-item active">
          <img
            style={{ filter: "brightness(40%)" }}
            src="./images/slider1.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption  d-md-block slider-content">
            <h1 className="border p-3 d-inline-block">MA COMPUTER SERVICING CENTER</h1>
            <p>Welcome to MA Computer Service Center, We Provide best service for You.</p>
            
          </div>
        </div>
        <div style={{ maxHeight: "90vh" }} className="carousel-item">
          <img
            style={{ filter: "brightness(40%)" }}
            src="./images/slider2.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption slider-content  d-md-block">
            <h1 className="border p-3 d-inline-block">DESKROP/LAPTOP SERVICE</h1>
            <p>The Most Affordable and Reliable Service Center In Bangladesh</p>
             
          </div>
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider;
