import { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";

import { Task } from '../components/Task';
import { Modal } from "../components/Modal";
import { TasksContext } from "../context/TasksContext";

export function List() {
  const { tasks, addTask } = useContext(TasksContext);
  const [show, setShow] = useState<boolean>(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <Container>
      <Button className='mb-3' onClick={openModal}>Add Task</Button>

      <Modal show={show} onHide={closeModal} addTask={addTask}/>

      { tasks.map(task => 
        <Task
          className="mb-3"
          id={ task.id }
          title={ task.title }
          description={ task.description }
          complete={ task.complete }
        />
      ) }

    </Container>
  )
}