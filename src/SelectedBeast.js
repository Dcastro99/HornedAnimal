import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Image
          src={this.props.selectedBeast.image_url}
          alt={this.props.selectedBeast.title}
        />
        <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
