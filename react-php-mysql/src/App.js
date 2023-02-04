import React, { useState } from 'react';

// libraries
import { Col, 
          Button, 
          Form, 
          FormGroup, 
          Label, 
          Input} from 'reactstrap';
import Axios from 'axios'          


const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    Axios({
      method: 'POST',
      url: 'https://8000-nedim89-devenvironment-if7ajmcki4y.ws-eu85.gitpod.io',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>

      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="email" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={submit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>

    </div>
  );
}

export default App;