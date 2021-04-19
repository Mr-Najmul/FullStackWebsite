import React from "react";

const Footer = () => {
  return (
    <section className="bg-secondary text-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="">MA COMPUTER</h3>
            <p className="">
              Dhaka 1212 Dhaka Division Bangladesh.
             {" "}
            </p>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" type="email"></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">SEND</button>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="myPlace"
              src="https://heera.it/wp-content/uploads/2011/11/google-maps-new-interface1.jpg"
              style={{ border: 0, height: "100%", width: "100%" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
