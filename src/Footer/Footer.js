import react, { Component } from "react";
import flag from "../commonResource/images/icons/16.png";
import FootLink from "./FooterLink";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
              >
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
                <FootLink h3="Shop and Learn" links="" nameLi=""/>
              <ul>
              <FootLink links="/" nameLi="Mac"/>
              <FootLink links="/" nameLi="iPad"/>
              <FootLink links="/" nameLi="iPhone"/>
              <FootLink links="/" nameLi="Watch"/>
              <FootLink links="/" nameLi="TV"/>
              <FootLink links="/" nameLi="Music"/>
              <FootLink links="/" nameLi="AirPods"/>
              <FootLink links="/" nameLi="HomePod"/>
              <FootLink links="/" nameLi="iPod touch"/>
              <FootLink links="/" nameLi="Accessories"/>
              <FootLink links="/" nameLi="Gift Cards"/>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
            <FootLink h3="Services"/> 
              <ul>
              <FootLink links="/" nameLi="Apple Music"/>
              <FootLink links="/" nameLi="Apple News+"/>
              <FootLink links="/" nameLi="iApple TV+"/>
              <FootLink links="/" nameLi="Apple Arcade"/>
              <FootLink links="/" nameLi="Apple Card"/>
              <FootLink links="/" nameLi="iCloud"/>
              </ul>
              <FootLink h3="Accounts"/> 
              <ul>
              <FootLink links="/" nameLi="Manage Your Apple ID"/>
              <FootLink links="/" nameLi="Apple Store Account"/>   
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
            <FootLink h3="Apple Store"/> 
              <ul>
              <FootLink links="/" nameLi="Find a Store"/>
              <FootLink links="/" nameLi="Genius Bar"/>
              <FootLink links="/" nameLi="Today at Apple"/>
              <FootLink links="/" nameLi="Apple Camp"/>
              <FootLink links="/" nameLi="Field Trip"/>
              <FootLink links="/" nameLi="Apple Store App"/>
              <FootLink links="/" nameLi="Refurbished and Clearance"/>
              <FootLink links="/" nameLi="Apple Trade In"/>
              <FootLink links="/" nameLi="Order Status"/>
              <FootLink links="/" nameLi="Shopping Help"/>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
            <FootLink h3="For Business"/> 
              <ul>
              <FootLink links="/" nameLi="Apple and Business"/>
              <FootLink links="/" nameLi="Shop for Business"/>
              </ul>
              <FootLink h3="For Education"/> 
              <ul>
              <FootLink links="/" nameLi="Apple and Education"/>
              <FootLink links="/" nameLi="Shop for College"/>
              <FootLink links="/" nameLi="Apple Card"/>
              <FootLink links="/" nameLi="iCloud"/>
                
              </ul>
              <FootLink h3="For Health Care"/> 
              <ul>
              <FootLink links="/" nameLi="Manage Your Apple ID"/>
              <FootLink links="/" nameLi="Apple Store Account"/>
              <FootLink links="/" nameLi="iCloud.com"/>
              </ul>
              <FootLink h3="For Government"/> 
              <ul>
              <FootLink links="/" nameLi="Apple and Education"/>
              <FootLink links="/" nameLi="Shop for College"/> 
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
            <FootLink h3="Apple Values"/> 
              <ul>
              <FootLink links="/" nameLi="Find a Store"/>
              <FootLink links="/" nameLi="Gift Cards"/>
              <FootLink links="/" nameLi="Today at Apple"/>
              <FootLink links="/" nameLi="Apple Camp"/>
              <FootLink links="/" nameLi="Field Trip"/>
              <FootLink links="/" nameLi="Apple Store App"/>
              <FootLink links="/" nameLi="Music"/>
              <FootLink links="/" nameLi="AirPods"/>
              <FootLink links="/" nameLi="HomePod"/>
              <FootLink links="/" nameLi="iPod touch"/>
              <FootLink links="/" nameLi="Accessories"/>
              </ul>
              <FootLink h3="About Apple"/> 
              <ul>
              <FootLink links="/" nameLi="Find a Store"/>
              <FootLink links="/" nameLi="Gift Cards"/>
              <FootLink links="/" nameLi="Today at Apple"/>
              <FootLink links="/" nameLi="Apple Camp"/>
              <FootLink links="/" nameLi="Field Trip"/>
              <FootLink links="/" nameLi="Apple Store App"/>
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
              <FootLink links="/" nameLi="Privacy Policy"/>
              <FootLink links="/" nameLi="Terms of Use"/>
              <FootLink links="/" nameLi="Sales and Refunds"/>
              <FootLink links="/" nameLi="Legal"/>
              <FootLink links="/" nameLi="Site Map"/>
              </ul>
            </div>
            <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} />
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer
