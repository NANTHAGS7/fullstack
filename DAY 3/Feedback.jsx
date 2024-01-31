import React from 'react';
import { Form, Input, ButtonToolbar, Button } from 'rsuite';
import Cust_navbar from '../components/Navbar';
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Feedback = () => (
    <div >
    <Cust_navbar/>
  <Form layout="horizontal">
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email-6">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password-6">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="textarea-6">
      <Form.ControlLabel>Textarea</Form.ControlLabel>
      <Form.Control name="textarea" rows={5} accepter={Textarea} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
);

export default Feedback;