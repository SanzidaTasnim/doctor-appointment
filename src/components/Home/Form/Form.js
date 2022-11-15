import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-main">
      <div className="form-sub">
        <h5>CONTACT US</h5>
        <h2>Always Connect With Us</h2>
        <div className="row container m-auto">
          <form action="#" method="post">
            <div className="form-group">
              <input
                type="email"
                className="form-control my-3"
                id="exampleFormControlInput1"
                placeholder="Email Address*"
                style={{ width: "800px", margin: "auto" }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control my-3"
                id="exampleFormControlInput1"
                placeholder="Subject*"
                style={{ width: "800px", margin: "auto" }}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control my-3"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Message*"
                style={{ width: "800px", margin: "auto" }}
                required
              ></textarea>
            </div>
            <br />
            <input
              type="submit"
              value="Submit"
              style={{ width: "100px" }}
              className="btn btn-primary input-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
