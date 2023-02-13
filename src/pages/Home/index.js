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
    <div className="App">
      <main className="App-main">
        <h3 className="mb-4">Our Services</h3>
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
  );
}
