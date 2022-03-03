import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data.json";
import "./App.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllBeasts: Data,
    };
  }

  render() {
    let HornedArr = this.state.AllBeasts.map((animal) => (
      <HornedBeast
        name={animal.title}
        img={animal.image_url}
        description={animal.description}
        alt={animal.keyword}
      />
    ));

    return (
      <>
        <div className="arr">{HornedArr}</div>
      </>
    );
  }
}

export default Main;
