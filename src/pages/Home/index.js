//import logo from '../../logo.svg';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import hedge from "../../images/hedge_bg.png";
import hedgeTrimming from "../../images/services/hedge_trimming.jpeg";
import lawnMower from "../../images/services/lawn_mower.jpeg";
import shrubPruning from "../../images/services/shrub_pruning.jpeg";
import weeding from "../../images/services/weeding.jpeg";
import yardCleanup from "../../images/services/yard_cleanup.jpeg";
import multch from "../../images/services/multch.jpeg";
import washing from "../../images/services/washing.jpeg";
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
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${hedge})`,
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
        <div
          style={{
            marginTop: "-1rem",
            height: "1rem",
            borderRadius: ".25rem .25rem 0 0",
            backgroundColor: "white",
          }}
        ></div>
      </header>

      <div className="container">
        <main className="App-main">
          <h3>Serving the Lower Mainland</h3>
          <p>
            Westwind Property Maintenance is committed to offering complete
            services to satisfy all of your landscaping and property upkeep
            requirements. We are dedicated to using the most up-to-date methods
            and tools to meet and surpass your expectations. We offer the
            knowledge and tools necessary to execute any project, from routine
            grass maintenance to a landscape restoration.We are aware that every
            property is different and needs a customised strategy. We provide
            individualised services that are tailored to your unique demands
            because of this.
          </p>
          <div className="mb-3 text-center">
            <Button as={Link} to="contact">
              Request a Free Quote
            </Button>
          </div>
          <h3 className="mt-4 mb-3">Our Services</h3>
          <div className="service-cards">
            {items.map((item, index) => (
              <Card>
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
              Request a Free Quote
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
