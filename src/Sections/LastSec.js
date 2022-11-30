import React, { Component } from "react";
import LastSecLink from "./LastSecLink";
import topLog from "../commonResource/images/icons/apple-tv-logo.png";
import banker from "../commonResource/images/home/banker.png";
import rlog from "../commonResource/images/icons/watch-series5-logo.png";
import arc from "../commonResource/images/icons/arcade.png";
import More from "./More";
import MidSecLinks from "./MidSecLink";

class LastSec extends Component {
  render() {
    return (
      <div>
        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <LastSecLink
                leftright="left-side-wrapper col-sm-12 col-md-6"
                lrCon="left-side-container"
                img={topLog}
                anoLog="tvshow-logo-wraper"
                anoImag={banker}
              />
              {/* <div className="watch-more-wrapper">
              <a href="#">Watch now on the Apple TV App</a>
            </div> */}
              <LastSecLink
                leftright="right-side-wrapper col-sm-12 col-md-6"
                lrCon="right-side-container"
                img={rlog}
                descr="description-wraper"
                descName="With the Always-On Retina display.
              You’ve never seen a watch like this."
                moreLink="/Learn More"
                moreName="Learn More"
                buyLink="/"
                buyName="Buy"
              />
              
            </div>
          </div>
        </section>
        <section className="sixth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <LastSecLink
                leftright="left-side-wrapper col-sm-12 col-md-6"
                lrCon="left-side-container"
                img={arc}
                descr="description-wraper white"
                descName="Agent 8 is a small hero on a big mission."
                moreLink="/Play now"
                moreName="Play now"
                buyLink="/"
                buyName="Learn about Apple Arcade"
              />
              
              <MidSecLinks
                leftRight="right-side-wrapper col-sm-12 col-md-6"
                lrcon="right-side-container"
                titleWrap="title-wraper"
                titleName="Apple Card Monthly Installments"
                desName="Pay for your next iPhone over time, interest-free with Apple
                Card."
                claName="links-wrapper"
                moreLink="/Learn More"
                moreName="Learn More"
                buyLink="/"
                buyName="Apply Now"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LastSec;

