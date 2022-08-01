import { createContext, useState } from "react";
import { ITask } from "../components/Task";

interface ITasksContext {
  tasks: ITask[],
};

interface ITasksState {
  children: React.ReactNode
}

export const TasksContext = createContext<ITasksContext>({
  tasks: []
});

export const TasksState = ({ children }: ITasksState) => {
  const [tasks, setTasks] = useState([
    {
      title: 'Hello Title',
      description: 'Hello Description'
    },
    {
      title: 'Hello Title',
      description: 'Hello Description'
    },
    {
      title: 'Hello Title',
      description: 'Hello Description'
    }
  ]);

  return (
    <TasksContext.Provider value={{ tasks }}>
      { children }
    </TasksContext.Provider>
  )
}