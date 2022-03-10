import React from 'react';
import HornedBeast from './HornedBeast';

import './App.css';

class Main extends React.Component {
  render() {
    return (
      <>
        {this.props.showSpecialMessage ? (
          <h1 id="message"> 100?!?! Man! That's a lotta Horns!!!</h1>
        ) : (
          ''
        )}
        <div className="arr">
          {this.props.allBeasts.map((animal, idx) => (
            <HornedBeast
              name={animal.title}
              img={animal.image_url}
              description={animal.description}
              alt={animal.keyword}
              showBeast={this.props.showBeast}
              key={idx}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Main;
