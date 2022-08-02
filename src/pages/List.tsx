import { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";

import { Task } from '../components/Task'
import { TasksContext } from "../context/TasksContext";

export function List() {
  const { tasks } = useContext(TasksContext)
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <Button>Add Task</Button>


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