import React from 'react'
import Form from 'react-bootstrap/Form';

function EditNote() {
  return (
    <div>

<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>


    </div>
  )
}

export default EditNote