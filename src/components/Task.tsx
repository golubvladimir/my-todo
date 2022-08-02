import { Card } from 'react-bootstrap';

 export interface ITask{
  className?: string;
  id: number;
  title: string;
  description: string;
  complete: boolean
}

export function Task({ className, id, title, description, complete }: ITask) {
  return (
    <Card className={ className }>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ description }</Card.Text>
        <Card.Text>{ complete }</Card.Text>
      </Card.Body>
    </Card>
  )
}