import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import Data from './Data.json';
import SelectForm from './SelectForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpecialMessage: false,
      show: false,
      allBeasts: Data,
      filteredBeasts: Data,
      selectedBeast: {},
    };
  }

  showBeast = (name) => {
    const selectedBeast = this.state.allBeasts.find(
      (beast) => beast.title === name
    );
    this.setState({ show: true, selectedBeast: selectedBeast });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      const howManyHorns = this.state.allBeasts.filter(
        (animal) => animal.horns == value
      );
      this.setState({ filteredBeasts: howManyHorns });
      if (value === '100') {
        this.setState({ showSpecialMessage: true });
      } else {
        this.setState({ showSpecialMessage: false });
      }
    } else {
      this.setState({ filteredBeasts: this.state.allBeasts });
    }
  };

  render() {
    return (
      <Container className="App">
        <Header />
        <SelectForm handleChange={this.handleChange} />
        <Main
          className="main"
          allBeasts={this.state.filteredBeasts}
          showBeast={this.showBeast}
          showSpecialMessage={this.state.showSpecialMessage}
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
