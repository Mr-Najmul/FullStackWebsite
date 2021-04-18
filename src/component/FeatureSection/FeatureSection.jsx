import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-dark p-5">
      <section className=" container">
        <h1 className="text-light text-center small-heading">WHY CHOOSE OUR SERVICES</h1>
        <p className="text-light text-center p-3 fw-light">
        MA Computer Service Center has many sides that it takes care of but our most important side that we focus and emphasize on is the Servicing. We want our customers to be happy and satisfied in our products and in us. So, it is our priority to provide all types of servicing to our customers. We provide servicing for Laptops, Desktops, Projectors, Printers, Monitors, UPS, Cameras, TVs and all the products that we sell. There are lots of ranges of servicing being provided by Star Tech in each of the Categories. All our servicing employees are highly trained and experienced to detect any types of problems in your product and give you the accurate description to what the problem is and why it is happening
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">Leading Retail Computer Service Center in Bangladesh</h5>
                <p className="card-text">
                Technology has touched each part of our lives and made living serene than ever before. We provide one-stop solutions for all IT items; your bliss is just a click away.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">Network and IT Security</h5>
                <p className="card-text">
                We help to design and develop enterprise network architecture and layered security model to ensure data availability, reliability and security to our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <img
                src="./images/feature3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">100% satisfied </h5>
                <p className="card-text">
                Our expert team of researchers investigates the current economic situation & provide the best reasonable prices for Laptops, Desktop PC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureSection;
