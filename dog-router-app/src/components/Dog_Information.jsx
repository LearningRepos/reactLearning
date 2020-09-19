import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Dog_Information extends React.Component {
  render() {
    return (
      <div class="Dog_Information">
        <Card style={{ width: "20rem", color: "black" }}>
          <Card.Img variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.age} Years Old</Card.Text>
            <Card style={{ width: "17rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{this.props.facts[0]}</ListGroup.Item>
                <ListGroup.Item>{this.props.facts[1]}</ListGroup.Item>
                <ListGroup.Item>{this.props.facts[2]}</ListGroup.Item>
              </ListGroup>
            </Card>
            <Button variant="primary">
              <Link className="Dog_Information-Back" exact to={"/dogs"}>
                Go Back
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dog_Information;
