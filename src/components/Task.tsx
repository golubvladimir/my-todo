import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';

import { TasksContext } from '../context/TasksContext';

 export interface ITask{
  className?: string;
  id: number;
  title: string;
  description: string;
  complete: boolean
}

export function Task({ className, id, title, description, complete }: ITask) {
  const { removeTask, completeTask } = useContext(TasksContext);

  console.log({ complete })

  return (
    <Card className={ className }>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ description }</Card.Text>
      </Card.Body>
      <Card.Body className='flex-column'>
        <Button className="w-full mb-2" variant="danger" onClick={() => removeTask(id)}>
          Remove
        </Button>
        {
          !complete 
            ? <Button className="w-full" variant="success" onClick={() => completeTask(id) }>
                Complete
              </Button>
            : ''
        }
      </Card.Body>
    </Card>
  )
}