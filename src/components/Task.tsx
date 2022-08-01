import { Card } from 'react-bootstrap';

 export interface ITask{
  className?: string;
  title: string;
  description: string;
}

export function Task({ className, title, description }: ITask) {
  return (
    <Card className={ className }>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ description }</Card.Text>
      </Card.Body>
    </Card>
  )
}