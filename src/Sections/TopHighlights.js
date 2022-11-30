import React,{Component, component} from "react";
import Section from "./TopSection";
import More from "./More";

class TopHigh extends Component {
    render(){
        return(
            <div>
      <section className="first-hightlight-wrapper">
        <Section alertName="New" proWrap="title-wraper bold black" productName="iPad Pro" />
        <More moreLink="/Learn More" moreName="Learn More" buyLink="/" buyName="Buy"/>
        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </section>
      <section class="second-hightlight-wrapper">
        <Section alertName="New" proWrap="title-wraper bold black" productName="MackBook Air"  />
        <div class="description-wrapper black">
          Twice the speed. Twice the storage.
        </div> 
        <div class="price-wrapper grey">From $999.</div>
        <More moreLink="/Learn More" moreName="Learn More" buyLink="/" buyName="Buy"/>
      </section>
      <section class="third-hightlight-wrapper">
        <Section proWrap="title-wraper bold "
          productName="iPhone 11 Pro"
          descrName="Pro cameras. Pro display. Pro performance."
          price="From $24.95/mo. or $599 with trade‑in."
        />
        <More moreLink="/Learn More" moreName="Learn More" buyLink="/" buyName="Buy"/>
      </section>
    </div>
        )
    }
}
export default TopHigh