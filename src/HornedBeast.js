import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0,
    };
  }

  favorites = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  };

  render() {
    return (
      <Card className="animalCard" style={{ width: '18rem' }}>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Img
          variant="top"
          src={this.props.img}
          alt={this.props.alt}
          description={this.props.description}
          onClick={() => this.props.showBeast(this.props.name)}
        />
        <Card.Body>
          <Card.Text></Card.Text>
          <Button variant="dark" size="lg" onClick={this.favorites}>
            favorited ={this.state.favorited} ❤️
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
