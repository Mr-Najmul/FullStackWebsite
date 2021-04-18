import axios from "axios";
import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    const uri = `https://intense-falls-76179.herokuapp.com/review`;
    axios
      .get(uri)
      .then(function (response) {
        // handle success
        const data = response.data.data;
        setReviewData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(reviewData);
  return (
    <section
      style={{
        // backgroundImage: "url(./images/blur.jpg)",
        backgroundColor:"black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className=" p-5"
    >
      <section className=" container">
        <h1 className="text-light text-center">OUR HAPPY CLIENTS</h1>
        <p className="text-light text-center">
          {" "}
          Our service center is able to fix all types of problems regarding your Laptop and Notebook. Our employees are highly trained and has lots of experience fixing laptops and notebooks. We provide hardware and software support for your required laptop or notebook. There are numerous types of hardware supports that we specialize on. We able to fix any kind of power disturbances or charging problems.
        </p>
        <div className="row">
          {reviewData.map((row, i) => (
            <div key={i} className="col-md-6">
              <div className="card mb-3 bg-transparent  border-0 text-light">
                <div className="row g-0">
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img
                      className="m-3 rounded-circle"
                      src={row.image}
                      alt="..."
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <p className="card-title text-warning">
                        <span>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                          <i className="fas fa-star px-1"></i>
                        </span>
                      </p>
                      <p
                        className="card-text fst-italic pb-0 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        {row.review}
                      </p>
                      <small className="text-bold ">{row.name}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
