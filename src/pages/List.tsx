import { useContext } from "react";
import { Container } from "react-bootstrap";

import { Task } from '../components/Task'
import { TasksContext } from "../context/TasksContext";

export function List() {
  const { tasks } = useContext(TasksContext)

  return (
    <Container>
      { tasks.map(task => 
        <Task
          className="mb-3"
          title={ task.title }
          description={ task.description }
        />
      ) }

    </Container>
  )
}