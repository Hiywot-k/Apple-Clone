import react, { Component } from "react";

class FootLink extends Component {
  render() {
    return (
      <div className="forh3">
        <h3 >{this.props.h3}</h3>
        <li>
          <a href={this.props.links}>
            {this.props.nameLi}
          </a>
        </li>
      </div>
    );
  }
}
export default FootLink
