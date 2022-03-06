import React from 'react';
import background from './safari.jpeg';

class Header extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
          className="Header"
        >
          <h1
            style={{
              color: 'coral',
              textShadow: '2px 2px 5px black',
            }}
          >
            Horned Beasts!
          </h1>
        </div>
      </>
    );
  }
}

export default Header;
