import React from 'react';
import HornedBeast from './HornedBeast';

import './App.css';

class Main extends React.Component {
  render() {
    let HornedArr = this.props.allBeasts.map((animal, idx) => (
      <HornedBeast
        name={animal.title}
        img={animal.image_url}
        description={animal.description}
        alt={animal.keyword}
        showBeast={this.props.showBeast}
        key={idx}
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
