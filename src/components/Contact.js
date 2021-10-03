import React from 'react'
import './contact.css'
import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap'

const Contact = () => {


  return (
    <>
      <div className='mainn '>

        <div className='container'>

          <Row>
            <Col className='one' style={{ borderRadius: '5%' }}>

              <Form className='mt-3' >
                <h4>Feedbacks ???</h4>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
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
                <Form.Label style={{ fontWeight: 'bold' }}>Comments</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox"style={{ fontWeight: 'bold' }} label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2'>
                  Submit
                </Button>
              </Form>



            </Col>

            <Col className='two' style={{ borderRadius: '5%' }}>

              <h2>For More Information</h2>
              <div className='link mb-5'>
                <ul>
                  <li><i className="bi bi-github"></i> <a target='_blank' href='https://github.com/SahadevDahit/Library-Management-System'> Github</a></li>
                  <li><i className="bi bi-youtube "></i> <a  target='_blank' href='https://www.youtube.com/channel/UC5eMerNQZ9AYnV5JhtKmFGQ'> Youtube</a></li>
                  <li><i className="bi bi-linkedin"></i> <a target='_blank' href='https://www.linkedin.com/in/sahadev-dahit-9164b6208'> LinkedIn</a></li>
                  <li><i className="bi bi-envelope-fill"></i> <a target='_blank' href='mailto:sahadevdahit111@gmail.com'> Send me mail</a></li>

                </ul>
              </div>

            </Col>
          </Row>


        </div>


      </div>
    </>
  )
}

export default Contact
