import React from "react";
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0 
    }
  }

  favorites = () => {
    this.setState({
      favorited: this.state.favorited + 1
    })
  }

  render() {
    return (
      
      <Card className="animalCard" style={{ width: '18rem' }}>
        <Card.Title>{this.props.name}</Card.Title>
          <Card.Img variant="top" src={this.props.img} alt={this.props.alt} onClick={this.favorites}/>
            <Card.Body>
              <Card.Text>favorited ={this.state.favorited} ❤️</Card.Text>
            </Card.Body>
      </Card>
    
    )
  }
}

export default HornedBeast;

