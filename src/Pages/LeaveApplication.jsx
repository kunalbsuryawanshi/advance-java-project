import NewNavbar from "./Navbar";
import "./LeaveApplication.css";
function LeaveApplication() {
  return (
    <>
      <NewNavbar />
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-sm-12 col-md-5 p-5 shadow">
          <div className="leav-portion mt-2 mb-5">
            <h3 className="text-center pt-4 text-light">
             <strong>Leave Application</strong> 
            </h3>
          </div>
          <label className="ms-1 text-secondary text-center">To : </label>
          <input
            id="city"
            className="form-control mb-4 shadow-sm"
            type="email"
            value="cdacmumbai@gmail.com"
            disabled
            readonly
          />
          <label className="ms-1 text-secondary text-center">
            Enter email :{" "}
          </label>
          <input
            className="form-control mb-4 shadow-sm p-1"
            type="email"
            placeholder="Enter email . . ."
            required
          />
          <label className="ms-1 text-secondary text-center">
            Describe Issue :{" "}
          </label>
          <textarea
            rows="5"
            className="form-control mb-4 shadow-sm"
            placeholder="Describe Issue . . ."
            required
          ></textarea>
          <button className="form-control bg-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default LeaveApplication;
