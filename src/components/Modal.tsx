import React, { ReactFragment, useState } from "react";
import { Modal as ModalB, Button, Form, FormControl, FormControlProps } from "react-bootstrap"

interface IModal {
  show: boolean,
  onHide: () => void
}

interface IFormAddState {
  title: string;
  description: string;
}

const startStateForm = {
  title: '',
  description: ''
}

export function Modal({ show, onHide }: IModal) {
  const [formAdd, setFormAdd] = useState<IFormAddState>({
    ...startStateForm
  });

  const handleChange = (value: string, fieldName: string) => {
    setFormAdd({
      ...formAdd,
      [fieldName]: value
    });
  }

  const cleanForm = () => {
    setFormAdd({
      ...startStateForm
    })   
  }

  return (
    <ModalB show={show} onHide={onHide}>
      <ModalB.Header closeButton>
        Add Task
      </ModalB.Header>

      <ModalB.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              Title
            </Form.Label>
            <Form.Control   
              type="text"
              placeholder="Task Title"
              value={formAdd['title']}
              onChange={({ target: { value } }) => { handleChange(value, 'title') }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control 
              type="text"
              placeholder="Task Description"
              value={formAdd['description']}
              onChange={({ target: { value } }) => { handleChange(value, 'description') }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </ModalB.Body> 
    </ModalB>
  )
}