

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addNote } from '../../redux/noteAction';
import { v4 as uuid } from "uuid";
import { useDispatch } from 'react-redux';



function AddNote() {
    const dispatch  = useDispatch();
    const [title , setTitle] = useState()
    const [content , setContent ]= useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
const handleSubmit = (e) => {
    e.preventDefault();

    let noteContent = {
        id : uuid,
         title,
        content

    }

    setTitle('')
    setContent('')

    dispatch(addNote(noteContent))

    handleClose()

   
    
}




  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                    heading
                    </div>

    <div className="col-6"> 

        <Button variant="primary" onClick={handleShow}>
        add
       </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title"   value={title} onChange= {(e) => setTitle(e.target.value)}/> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3}  value={content} onChange= {(e) => setContent(e.target.value)}/>
      </Form.Group>
    </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>





                
                </div>
            </div>
        </div>


    </div>
  )
}

export default AddNote

