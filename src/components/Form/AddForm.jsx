import React, { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";

const AddForm = ({ addTask }) => {
  const initialFormState = { id: null, task: "", status: "incompleted" };

  const [task, setTask] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  return (
    <div className="max-w-2xl bg-white">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!task.task) return;

          addTask(task);
          setTask(initialFormState);
        }}
        className="flex items-center justify-between"
      >
        <div className="flex  w-full">
          <input
            className="bg-white p-3 w-full focus:outline-none border-transparent text-base ring-0 focus:border-none border-none "
            type="text"
            name="task"
            onChange={handleChange}
            value={task.task}
            id=""
            placeholder="Enter New Todo"
          />
        </div>
        <button
          type="submit"
          className="p-3 bg-green-400 hover:bg-green-500 transition-all duration-200 ease-in-out text-white"
        >
          <FaCalendarPlus className="" />
        </button>
      </form>
    </div>
  );
};

export default AddForm;
