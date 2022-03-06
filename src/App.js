import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import Data from './Data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      allBeasts: Data,
      selectedBeast: {},
    };
  }

  showBeast = (name) => {
    const selectedBeast = Data.find((beast) => beast.title === name);
    this.setState({ show: true, selectedBeast: selectedBeast });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container className="App">
        <Header />
        <Main
          className="main"
          allBeasts={this.state.allBeasts}
          showBeast={this.showBeast}
        />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.onHide}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
