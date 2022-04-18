import React from "react";
import { Accordion } from "react-bootstrap";
import question from "../../../../images/question.jpg";
const QnA = () => {
  return (
    <section className="container py-5 px-4">
      <h1 className="py-5 text-center fw-bolder">Frequently Asked Questions</h1>
      <div className="row gx-lg-5 gy-2 order-last order-lg-first order-md-first order-sm-first">
        <div className="col-lg-7 col-md-6 col-12">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <span className="fw-bold">How do I contact?</span>
              </Accordion.Header>
              <Accordion.Body>
                My Contact Number:
                <strong>+88017035844XX </strong>(9:00 AM to 6:00 PM )
                <br />
                Email:
                <strong> leonphotography@gmail.com </strong>(24/7)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <span className="fw-bold">Where is Mine Address?</span>{" "}
              </Accordion.Header>
              <Accordion.Body>
                <address>
                  <strong> Address:</strong> Green XXX Plaza 1st Floor Satmasjid
                  Road XXX/G (Old), XX (New, Dhaka 9989).
                </address>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span className="fw-bold">Contact Time</span>
              </Accordion.Header>
              <Accordion.Body>
                <strong>10:00 AM to 5:30 PM</strong>
                (Excluding Friday-Saturday and Government Holidays )
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-5 col-md-6 col-12 order-first order-lg-last order-md-last order-sm-last">
          <div>
            <img
              className="img-fluid"
              src={question}
              width={"500px"}
              height={"300px"}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QnA;
