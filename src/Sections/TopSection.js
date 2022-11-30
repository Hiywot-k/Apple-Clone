import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="new-alert">{this.props.alertName}</div>
          <div className={this.props.proWrap}>
            {this.props.productName}
          </div>
          <div className="description-wrapper">{this.props.descrName}</div>
          <div className="price-wrapper">{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Section;
