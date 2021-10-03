import React from 'react'
import {Form,Button} from 'react-bootstrap'
const signin = () => {
    return (
        <>
           <Form className='mt-4' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
           
        </>
    )
}

export default signin
