import React from "react";
import "./Body.css";
import home from "../Images/home.jpg";
const Body = () => {
  let textAlign = { textAlign: "justify" };
  let border = { border: "none" };
  return (
    <>
    <div style={{marginTop:'100px', marginBottom:'150px'}}>
      <div style={border} className="card mb-5 mt-5 shadow">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p style={textAlign} className="card-text">
                High Performance Computing (HPC) plays an important role in both
                scientific advancement and economic competitiveness of a nation
                - making production of scientific and industrial solutions
                faster, less expensive, and of higher quality. HPC is a key
                component in many applications: designing vehicles and
                airplanes; designing high-rise buildings and bridges; discovery
                of drugs; discovery and extraction of new energy sources like
                oil and natural gas; weather forecasting; and many more. C-DAC
                with its focus in Advanced Computing is uniquely positioned to
                establish dependable and secure Exascale Ecosystem offering
                services in various domains. C-DAC has crafted its strategic
                practical roadmap keeping in perspective the paradigm shift in
                the global technological ecosystem and ever-dynamic area of
                national ICT scenario. Accordingly, the roadmap has been devised
                with four-pronged approach based on the Core as HPC & Cloud.,
                viz. Futuristic Research, Applied R&D, Applications and Services
                covering 28 thrust areas. Towards realisation of the roadmap,
                mission mode programmes were evolved to research, develop and
                deliver the futuristic technologies/solutions.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={home} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Body;
