//import logo from '../../logo.svg';
import { Card, ListGroup } from "react-bootstrap";
import "./style.scss";

export function HomePage() {
  const items = [
    {
      title: "Lawn Mowing",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Spring Yard Cleanup",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Shrub Pruning",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Hedge Trimming",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Weeding",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Flat Surface Power Washing",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Fertilizing",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
    {
      title: "Soil and Mulch",
      description:
        "Our lawn care professionals have the experience to all your property maintenance needs",
    },
  ];

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://cdn.midjourney.com/32425e72-066e-4a8a-b064-90d95be099b5/grid_0.png')",
            height: 400,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1
                style={{
                  fontSize: "3rem",
                  fontStyle: "italic",
                  textShadow: "rgb(0 0 0) 3px 4px 7px",
                }}
              >
                Get the jump on Spring!
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="App-main">
          <h3>Custom Maintenance Programs</h3>
          <p>
            Westwind Property Maintenance is committed to offering complete
            services to satisfy all of your landscaping and property upkeep
            requirements. We are dedicated to using the most up-to-date methods
            and tools to meet and surpass your expectations. We offer the
            knowledge and tools necessary to execute any project, from routine
            grass maintenance to a full landscape restoration.
          </p>
          <p>
            We are aware that every property is different and needs a customised
            strategy. We provide individualised services that are tailored to
            your unique demands because of this. Our staff will collaborate
            closely with you to comprehend your goals and develop a plan that
            will help you achieve your landscaping and property management
            objectives.
          </p>
          <h3 className="mt-4 mb-3">Our Services</h3>
          <div className="service-cards">
            {items.map((item, index) => (
              <Card>
                <Card.Img variant="top" src="https://placehold.co/600x300" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
