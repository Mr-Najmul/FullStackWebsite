import React from "react";

const OurServices = () => {
  return (
    <section className="bg-secondary bg-primary p-5">
      <section className=" container">
        <h1 className="text-light text-center">WE PROVIDE SERVICES FOR YOU</h1>
        <div className="row">
          <div className="col-md-6">
            <div
              className="card mb-3  border-0 text-light"
              style={{ backgroundColor: "#00000040" }}
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-laptop"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Laptop</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    Our service center is able to fix all types of problems regarding your Laptop and Notebook. Our employees are highly trained and has lots of experience fixing laptops and notebooks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#00000040" }}
              className="card mb-3 border-0 text-light"
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-desktop"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Desktop</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    Our trained service providers are trained to handle all types of Desktop PC problems and issues and are able to deliver the right solution for your product. We provide both hardware and software support for your Desktop PC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#00000040" }}
              className="card mb-3 border-0 text-light"
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-project-diagram"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Projector</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    Our service centers are able to fix projectors. The projector can be any brand and we will be able to fix it. The services that we provide for projectors are, problem with the Lamp, temperature issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{ backgroundColor: "#00000040" }}
              className="card mb-3 border-0 text-light"
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-print"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Printer</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    We have trained service men that specialize on providing solutions and fixing your printers. Our service men are able to provide solution for problems like paper jamming and pulling, ink leaking, cartridge-drum setting and with the power and response problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#00000040" }}
              className="card mb-3 border-0 text-light"
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-plug"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">UPS</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    Finding proper service centers for UPS and getting proper service for them is the hardest. Computer service center provides solution for both of the problems. Our service centers  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#00000040" }}
              className="card mb-3 border-0 text-light"
            >
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "70px", height: "70px" }}
                    className="border border-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <span className="fs-5">
                      <i className="fas fa-tv"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <b className="card-title">Monitor</b>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                    The most common problems that occur with monitors are with the power port, display in and output, no display and response and the most common of all the problem is the display panel problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurServices;
