import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { HiMail, HiPhone } from "react-icons/hi";
import "./style.scss";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    city: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to the server
    console.log(formData);
  };

  return (
    <div className="container">
      <main className="App-main">
        <h3 className="mb-3">Contact</h3>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Request a free quote
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <Card className="contact-info">
              <Card.Body>
                <Card.Title>Our Information</Card.Title>
                <Card.Text>
                  <HiMail /> info@westwindpm.co
                </Card.Text>
                <Card.Text>
                  <HiPhone />
                  (604) 773-1238
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
