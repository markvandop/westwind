import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./style.scss";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        <h3 className="mb-4">Contact</h3>
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
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="city"
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
        </Row>
      </main>
    </div>
  );
}
