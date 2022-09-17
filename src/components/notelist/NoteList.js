import React, {useState} from 'react'
import {Container, Row , Col, Card , Button , Modal} from 'react-bootstrap';
import EditNote from '../edit/EditNote';

function NoteList(note) {

const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <EditNote />
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

   


        




        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                               { note.title}
                            
                            </Card.Title>
                        
                            <Card.Text>
                                { note.content}
                                

                                <a  onClick={handleShow}> Read More</a>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className=' text-center bg-light' bg='dark'>
   
    <Button variant="outline-primary" className='me-2 ' onClick={handleShow}>     Update</Button>
      <Button variant="outline-danger" > Delete</Button>
    </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>

    








    </div>
  )
}

export default NoteList