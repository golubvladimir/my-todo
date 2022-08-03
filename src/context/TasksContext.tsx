import { createContext, useState } from "react";
import { ITask } from "../components/Task";

interface ITasksContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
};

interface ITasksState {
  children: React.ReactNode
}

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  completeTask: () => {}
});

export const TasksState = ({ children }: ITasksState) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    setTasks([
      ...tasks,
      task
    ])
  };

  const removeTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  const completeTask = (id: number) => {
    const tasksCopy = [...tasks];

    const index = tasksCopy.findIndex(task => task.id === id);

    tasksCopy[index].complete = true;

    setTasks(tasksCopy);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, completeTask }}>
      { children }
    </TasksContext.Provider>
  )
}