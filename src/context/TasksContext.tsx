import { createContext, useState } from "react";
import { ITask } from "../components/Task";

interface ITasksContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: number) => void;
};

interface ITasksState {
  children: React.ReactNode
}

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {}
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

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
      { children }
    </TasksContext.Provider>
  )
}