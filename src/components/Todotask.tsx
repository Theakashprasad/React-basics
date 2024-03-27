import React from "react";
interface Itask {
  taskName: string;
  deadLine: number;
}
interface Props {
  task: Itask;
  completeTask(taskNameToDelete: string): void;
}
const Todotask = ({ task, completeTask }: Props) => {
  return (
    <div className="mt-11">
 
      <div className="flex justify-center ">
        <div className="flex justify-around items-center bg-gray-100 rounded-md p-4 mb-2 w-1/4">
          <span className="text-lg">{task.taskName}</span>
          <br />
          <span className="text-gray-600">Deadline: {task.deadLine}</span>
        </div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
          className="bg-red-500 text-white px-5 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todotask;
