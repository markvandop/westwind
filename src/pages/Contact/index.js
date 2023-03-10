import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Modal } from "react-bootstrap";
import { HiMail, HiPhone } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "./style.scss";

export function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    city: "",
    message: "",
  });

  const [formResponse, setFormResponse] = useState({
    title: "Message sent",
    description:
      "Thank you for taking the time to send me an email requesting a quote. We will be in touch with you soon.",
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
    emailjs
      .send(
        process.env.REACT_APP_MAIL_SERVICE_ID, //YOUR_SERVICE_ID
        process.env.REACT_APP_MAIL_TEMPLATE, //YOUR_TEMPLATE_ID
        formData,
        process.env.REACT_APP_MAIL_PUBLIC_KEY //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          handleShow();
          console.log(result.text);
        },
        (error) => {
          setFormResponse({
            title: "Something went wrong",
            description:
              "Unable to send email, please try again. If the problem persists please feel free to reach out by phone.",
          });
          handleShow();
          console.log("error", error.text);
        }
      );
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
                Send message
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <Card className="contact-info">
              <Card.Body>
                <Card.Title>Drop us a line!</Card.Title>
                <Card.Text>
                  Send us an email or call us for a quote for your project, and
                  we will find something to fit your needs.
                </Card.Text>
                <Card.Text>
                  Contact Richard Vandop:
                  <br />
                  <HiPhone />
                  <a
                    href="tel:6047731238"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      color: "#595959",
                    }}
                  >
                    (604) 773-1238
                  </a>
                </Card.Text>
                <Card.Text>
                  <HiMail />
                  contact@westwindpm.co
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formResponse.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{formResponse.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
}
