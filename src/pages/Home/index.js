//import logo from '../../logo.svg';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import hedge from "../../images/hedge_bg.jpg";
import hedgeTrimming from "../../images/services/hedge_trimming.jpg";
import lawnMower from "../../images/services/lawn_mower.jpg";
import shrubPruning from "../../images/services/shrub_pruning.jpg";
import weeding from "../../images/services/weeding.jpg";
import yardCleanup from "../../images/services/yard_cleanup.jpg";
import multch from "../../images/services/multch.jpg";
import washing from "../../images/services/washing.jpg";
import location from "../../images/location.jpg";
import cardboard from "../../images/cardboard.png";

import "./style.scss";

export function HomePage() {
  const items = [
    {
      title: "Lawn Mowing",
      description:
        "Our lawn care service offers expert maintenance of a property's grass through efficient and reliable cutting, resulting in a well-manicured lawn.",
      image: lawnMower,
    },
    {
      title: "Spring Yard Cleanup",
      description:
        "Spring yard cleanup involves thorough removal of winter debris and preparation of a property's lawn and garden for the growing season",
      image: yardCleanup,
    },
    {
      title: "Shrub Pruning",
      description:
        "Shrub pruning is a specialized service that involves the expert trimming and shaping of shrubs and bushes to maintain their health, appearance, and promote new growth",
      image: shrubPruning,
    },
    {
      title: "Hedge Trimming",
      description:
        "Hedge trimming is a service that involves the precise cutting and shaping of hedges to maintain their desired appearance and promote healthy growth",
      image: hedgeTrimming,
    },
    {
      title: "Weeding",
      description:
        "Weeding is a service that involves the removal of unwanted plants from a property's lawn and garden to maintain a pristine appearance and promote the growth of desired vegetation",
      image: weeding,
    },
    {
      title: "Flat Surface Power Washing",
      description:
        "Flat surface power washing is a service that utilizes high-pressure water to effectively remove dirt, grime, and other buildup from flat surfaces such as driveways, sidewalks, and patios",
      image: washing,
    },
    {
      title: "Fertilizing, Soil and Mulch",
      description:
        "Fertilizing, soil and mulch services involve the application of nutrients, soil improvement, and the placement of organic or inorganic materials to enhance the health and appearance of a property's lawn and garden",
      image: multch,
    },
  ];

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="text-center bg-image"
          style={{
            backgroundImage: `url(${hedge})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-100"
            style={{ position: "relative" }}
          >
            <div className="text-white hero-wrapper">
              <h1 className="hero-text">Garden and Lawn Care</h1>

              <div
                style={{
                  backgroundImage: `url(${cardboard})`,
                  opacity: ".25",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: "none",
                }}
              />
              <div className="m-3 text-center">
                <Button as={Link} to="contact">
                  Request a free quote
                </Button>
              </div>
              <div className="hero-sub-text">Get the jump on Spring!</div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "-.5rem",
            height: "1rem",
            borderRadius: ".25rem .25rem 0 0",
            backgroundColor: "white",
            position: "relative",
          }}
        ></div>
      </header>

      <div className="container">
        <main className="App-main">
          <h3>Serving the Lower Mainland</h3>
          <div className="d-flex location-block">
            <div className="location-text">
              Westwind Property Maintenance is committed to offering complete
              services to satisfy all of your landscaping and property upkeep
              requirements. We are dedicated to using the most up-to-date
              methods and tools to meet and surpass your expectations. We offer
              the knowledge and tools necessary to execute any project, from
              routine grass maintenance to a landscape restoration.We are aware
              that every property is different and needs a customised strategy.
              We provide individualised services that are tailored to your
              unique demands because of this.
            </div>
            <img
              src={location}
              alt="location pin icon"
              className="location-pin"
            />
          </div>
          <h3 className="mt-4 mb-3">Our Services</h3>
          <div className="service-cards">
            {items.map((item, index) => (
              <Card tabIndex={1} aria-label={item.title}>
                <Card.Img
                  variant="top"
                  src={item.image ? item.image : "https://placehold.co/600x300"}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="mt-4 mb-3 text-center">
            <Button as={Link} to="contact">
              Request a free quote
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
