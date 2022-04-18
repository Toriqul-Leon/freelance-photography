import React from "react";
import "./Services.css";
import useServices from "../../../../hooks/useServices";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [services] = useServices();

  return (
    <>
      <h1 className="text-center mt-4 fw-bold">Services</h1>

      <div className="services-container container mb-5">
        {services.map((service) => {
          return (
            <Row xs={1} md={1} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card className="text-center">
                    <Card.Img variant="top" src={service.image} />
                    <Card.Body key={service._id}>
                      <Card.Title>{service.service}</Card.Title>
                      <strong>Cost: ${service.cost}</strong>
                      <Card.Text>{service.description}</Card.Text>
                      <div className="text-center ">
                        <Button
                          as={Link}
                          to={"/checkout"}
                          className="btn btn-primary w-75 d-block ms-auto me-auto"
                        >
                          Checkout
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          );
        })}
      </div>
    </>
  );
};

export default Services;
