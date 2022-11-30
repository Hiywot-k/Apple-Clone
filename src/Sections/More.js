import React, { Component, component } from "react";

class More extends Component {
  render() {
    return (
      <div className="links-wrapper">
        <ul>
          <li>
            <a href={this.props.moreLink}>{this.props.moreName}</a>
          </li>
          <li>
            <a href={this.props.buyLink}>{this.props.buyName}</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default More;
