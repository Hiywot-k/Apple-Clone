import React, { Component } from "react";

class MidSecLinks extends Component {
  render() {
    return (
      <div className={this.props.leftRight}>
        <div className={this.props.lrcon}>
          <div className={this.props.titleWrap}>{this.props.titleName}</div>
          <div className="description-wraper">{this.props.desName}</div>
          <div className="price-wrapper">
            {this.props.priceLi}
            <sup>{this.props.one}</sup>
          </div>
          <div className={this.props.claName}>
          <ul>
            <li>
              <a href={this.props.moreLink}>{this.props.moreName}</a>
            </li>
            <li>
              <a href={this.props.buyLink}>{this.props.buyName}</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}
export default MidSecLinks;
