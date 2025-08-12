import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { fetchCards } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchCards({ token: user?.token });
      if (data?.tasks) setTasks(data.tasks);
    } catch (err) {
      setError(err.message || "Ошибка загрузки задач");
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) getTasks();
  }, [getTasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        getTasks,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
