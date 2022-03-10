import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class SelectForm extends React.Component {
  render() {
    return (
      <>
        <Container id="HornForm">
          <Form>
            <Form.Label>
              <h2>How many horns!</h2>
            </Form.Label>
            <Form.Select onChange={(event) => this.props.handleChange(event)}>
              <option value="">Please Select An Option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">?</option>
            </Form.Select>
          </Form>
        </Container>
      </>
    );
  }
}

export default SelectForm;
