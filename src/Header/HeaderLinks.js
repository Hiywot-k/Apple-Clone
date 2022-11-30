import React, { Component } from "react";
import {Link} from "react-router-dom"

class NavLinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.urlLinks}>
         {this.props.urlName}
        </Link>
      </li>
    );
  }
}
export default NavLinks
