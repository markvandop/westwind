//import logo from '../../logo.svg';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Coupon from "../../components/Coupon/Coupon";
import truck from "../../images/truck.jpg";
import hedgeTrimming from "../../images/services/hedge_trimming.jpg";
import lawnMower from "../../images/services/lawn_mower.jpg";
import shrubPruning from "../../images/services/shrub_pruning.jpg";
import weeding from "../../images/services/weeding.jpg";
import yardCleanup from "../../images/services/yard_cleanup.jpg";
import multch from "../../images/services/multch.jpg";
import cad from "../../images/cad.png";
import jon from "../../images/jon_avatar.png";
//import location from "../../images/location.jpg";
import cardboard from "../../images/cardboard.png";
import mesh from "../../images/ico-dots-hq.jpeg";

import "./style.scss";

export function HomePage() {
  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="text-center bg-image"
          style={{
            backgroundImage: `url(${truck})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 39%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-100"
            style={{ position: "relative" }}
          >
            <div className="text-white hero-wrapper">
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
      </header>

      <main className="flex-row">
        <div className="main-wrapper">
          <div
            style={{
              backgroundImage: `url(${mesh})`,
              backgroundSize: "cover",
              opacity: ".85",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          />
          <div className="col-12">
            <div className="container">
              <div class="main-profile">
                <div
                  class="profile-photo"
                  style={{
                    backgroundImage: `url(${jon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                ></div>
                <div class="profile-socials mobile-hide">
                  <i class="profile-location">
                    <img src={cad} alt="us" class="location-icon" />
                  </i>
                </div>
              </div>
              <div className="main-side">
                <div className="profile-head">
                  <h1 className="head-name">Jon Codling</h1>
                </div>
                <div className="driver-info">
                  <div className="driver-info-item">
                    <strong>2023 Truck</strong> The Spot
                  </div>
                  <div className="driver-info-item">
                    <strong>2023 Tour Highlights</strong> Codlings Limited
                    Inclusion Total Off Road Intense Society
                  </div>
                  <div className="driver-info-item">
                    <strong>Hometown</strong> Richmond, British Columbia
                  </div>
                  <div className="driver-info-item">
                    <strong>Nickname</strong> A "Professional" Driver
                  </div>
                  <div className="driver-info-item">
                    <strong>Birthdate</strong> February 12, 1983
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="p-4">
              <p>
                Jon Codling’s rookie season was one of the biggest Codlings
                Limited Inclusion Total Off Road Intense Society of 1995. The
                youngest of the Codling’s siblings, Jon was placed in Grave
                Digger on the C.L.I.T.O.R.I.S tour. He didn’t take long to make
                a mark, winning the 2-Wheel Skills competition in his very first
                Monster Jam event. He proved to be a natural and went on to win
                the tour championship in his rookie season, which vaulted him to
                Co-Rookie of the Year for 1995.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
