import React, { ReactFragment, useState } from "react";
import { Modal as ModalB, Button, Form, FormControl } from "react-bootstrap"

interface IFormAddState {
  title: string;
  description: string;
}

export function Modal() {
  const [formAdd, setFormAdd] = useState<IFormAddState>({
    title: '',
    description: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    event.preventDefault();

    setFormAdd({
      ...formAdd,
      [fieldName]: event.target.value
    });
  }

  return (
    <ModalB>
      <ModalB.Header>
        Add Task
      </ModalB.Header>

      <ModalB.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              Title
            </Form.Label>
            <Form.Control   
              type="text"
              placeholder="Task Title"
              value={formAdd['title']}
              onChange={e => handleChange(e, 'title')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control 
              type="text"
              placeholder="Task Description"
              value={formAdd['description']}
              onChange={e => handleChange(e, 'description')}
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