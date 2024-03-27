import React, { ChangeEvent, useState } from "react";
import Todotask from "./Todotask";

interface Itask {
  taskName: string;
  deadLine: number;
}

const TodoList = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setToDoList] = useState<Itask[]>([]);

  const handchange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(parseInt(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setToDoList([...todolist, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setToDoList(
      todolist.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <div className="flex justify-center mt-16">
        <h1 className="font-extrabold text-2xl underline">TO DO LIST</h1>
      </div>
      <div className="header flex justify-center mt-12">
        <div className="header flex justify-center space-x-4">
          <label className="mt-2" htmlFor="">
            TASK
          </label>
          <input
            type="text"
            placeholder="Task.."
            name="task"
            onChange={handchange}
            value={task}
            className="border border-gray-300 rounded px-4 py-2 w-1/2"
          />
          <label className="mt-2" htmlFor="">
            DEADLINE
          </label>
          <input
            type="number"
            name="deadline"
            id=""
            placeholder="Deadline.."
            onChange={handchange}
            value={deadline}
            className="border border-gray-300 rounded px-4 py-2 w-1/2"
          />
        </div>
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
        >
          Add task
        </button>
      </div>
      <br />
      <hr />
      <div className="flex justify-center  mb-5">
        <span>Pending...</span>
      </div>
      <div>
        <div className="todolist">
          {todolist.map((task: Itask, key: number) => {
            return (
              <Todotask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
