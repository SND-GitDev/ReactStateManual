import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import { FaApple } from "react-icons/fa";

export default class Apple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "grey",
      size: 200,
    };
    setTimeout(() => {
      this.state.color = "yellow";
    }, 2000);
  }

  render() {
    return (
      <Card className="card border-light mb-3 text-center">
        <Card.Body className="shadow p-3 mb-5 bg-white rounded align-middle">
          <div><FaApple size={this.state.size} color={this.state.color}/></div>
          <div>
            <Button variant="primary" onClick = {() => this.setState({color: "blue"})}>Blue</Button>
            <Button variant="success" onClick = {() => this.setState({color: "green"})}>Green</Button>
            <Button variant="danger" onClick = {() => this.setState({color: "red"})}>Red</Button>
            <Button variant="secondery" onClick = {() => this.setState({size: this.state.size + 20})}>Pop!</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
