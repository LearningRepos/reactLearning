import React from "react";
import { Link } from "react-router-dom";

class Dog_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Dog_Profile">
        <img
          className="Dog_Profile-Image"
          src={this.props.imgUrl}
          alt={this.props.dogName}
        />
        <p className="Dog_Profile-Name">
          <Link
            className="Dog_Information-Back"
            exact
            to={"/dogs/" + this.props.dogName}
          >
            {this.props.dogName}
          </Link>
        </p>
      </div>
    );
  }
}

export default Dog_Profile;
