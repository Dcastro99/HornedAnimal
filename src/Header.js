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
          <h1 style={{ color: 'black' }}>Horned Beasts!</h1>
        </div>
      </>
    );
  }
}

export default Header;
