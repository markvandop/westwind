import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import cardboard from "../../images/cardboard.png";

const Coupon = () => {
  return (
    <div className="coupon-card">
      <h3>This year, get the jump on Spring and Fall cleanup!</h3>
      <h5>10% off on all services</h5>
      <div
        style={{
          backgroundImage: `url(${cardboard})`,
          opacity: ".15",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          borderRadius: "0.25rem",
        }}
      />
      <Button as={Link} to="contact" style={{ marginTop: ".5rem" }}>
        Request a free quote
      </Button>
    </div>
  );
};

export default Coupon;
