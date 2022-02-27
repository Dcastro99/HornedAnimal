import React from "react";
import HornedGopher from "./horned-gophers.jpeg"
import Cassowary from "./cassowary1.jpg"
import NubianIbex from "./nubianibex.jpeg"

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title1}</h2>
        <img src={HornedGopher} alt="horned gopher-skeleton" title="Horned Gopher"></img>
        <p>{this.props.description1}</p>
        <h2>{this.props.title2}</h2>
        <img src={Cassowary} alt="horned bird" title="Cassowary"></img>
        <p>{this.props.description2}</p>
        <h2>{this.props.title3}</h2>
        <img src={NubianIbex} alt="horned gopher-skeleton" title="Horned Gopher"></img>
        <p>{this.props.description3}</p>
      </div>
     
      
      
    )
  }
}

export default HornedBeast;
