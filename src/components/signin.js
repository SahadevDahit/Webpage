import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
const signin = () => {
    return (
        <>
       
       <Form className='mt-1.5'>
       
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridPassword">
          <Form.Label style={{ fontWeight: 'bold' }}> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>



        <Button variant="primary" type="submit" className='mt-2'>
          Submit
        </Button>
      </Form>
           
        </>
    )
}

export default signin
