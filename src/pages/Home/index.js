//import logo from '../../logo.svg';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Coupon from "../../components/Coupon/Coupon";
import hedge from "../../images/hedge_bg.jpg";
import hedgeTrimming from "../../images/services/hedge_trimming.jpg";
import lawnMower from "../../images/services/lawn_mower.jpg";
import shrubPruning from "../../images/services/shrub_pruning.jpg";
import weeding from "../../images/services/weeding.jpg";
import yardCleanup from "../../images/services/yard_cleanup.jpg";
import multch from "../../images/services/multch.jpg";
import washing from "../../images/services/washing.jpg";
//import location from "../../images/location.jpg";
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
          <div className="row">
            <div className="col-lg-7">
              <h3>Serving the Lower Mainland</h3>
              <div className="d-flex location-block">
                <div className="location-text">
                  Westwind Property Maintenance is committed to offering
                  complete services to satisfy all of your landscaping and
                  property upkeep requirements. We're aware that every property
                  is different and needs a customised strategy. We provide
                  individualised services that are tailored to your unique
                  demands because of this.
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <Coupon />
            </div>
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

          <div className="mt-4 mb-4 text-center">
            <Button as={Link} to="contact">
              Request a free quote
            </Button>
          </div>

          <div className="faq">
            <h3>FAQ About Lawn Maintenance in the Lower Mainland</h3>
            <div className="d-flex flex-column" style={{ gap: "1rem" }}>
              <div>
                Maintaining a lawn in British Columbia, Canada can be
                challenging due to the region's varying weather conditions,
                including periods of drought, heavy rainfall, and cold
                temperatures. However, there are several steps you can take to
                keep your lawn looking healthy and vibrant.
              </div>
              <div>
                <h5 className="mb-1">Watering</h5>
                Watering your lawn is crucial for its health, especially during
                the hot summer months. Water your lawn in the early morning or
                evening to reduce evaporation, and be sure to avoid
                over-watering, which can lead to the growth of fungus and other
                problems.
              </div>
              <div>
                <h5 className="mb-1">Fertilization</h5>
                Regular fertilization is essential for a healthy lawn. Apply a
                high-quality fertilizer with the correct balance of nitrogen,
                phosphorus, and potassium to promote healthy growth and strong
                roots.
              </div>
              <div>
                <h5 className="mb-1">Mowing</h5>
                Mowing is necessary to keep your lawn looking neat and tidy, but
                be sure to mow it correctly. Cut only the top one-third of the
                grass blades, and don't cut your lawn too short, as this can
                weaken the grass and make it more susceptible to disease and
                pests.
              </div>
              <div>
                <h5 className="mb-1">Aeration</h5>
                Aerating your lawn can improve air and water circulation in the
                soil, which helps to promote healthy root growth. You can rent
                an aerator or hire a lawn care professional to do this for you.
              </div>
              <div>
                <h5 className="mb-1">Weed and pest control</h5>
                Weeds and pests can quickly take over a lawn, so it's important
                to stay on top of them. Regularly remove weeds by hand, and use
                an appropriate herbicide if necessary. Consider using natural
                pest control methods to avoid harming beneficial insects.
              </div>
              <div>
                <h5 className="mb-1">Soil testing</h5>
                Test your soil every few years to determine if it has the proper
                pH balance and nutrient levels. Adjust your lawn care regimen
                accordingly if the soil test reveals any imbalances.
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
