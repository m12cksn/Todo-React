import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";

const UserTable = ({ tasks, toogleStatus, deleteTask }) => {
  //   console.log(tasks);
  return (
    <div className="flex flex-col gap-2">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`${
              task.status === "completed"
                ? "bg-slate-50 flex justify-between"
                : "bg-slate-50 flex justify-between"
            }`}
          >
            <h1
              className={`${
                task.status === "completed"
                  ? "p-3 text-slate-500 font-bold line-through"
                  : "p-3 text-slate-700 font-semibold"
              } `}
            >
              {task.task}
            </h1>
            <div className="flex ">
              <button
                onClick={() => toogleStatus(index)}
                className={`${
                  task.status === "completed"
                    ? "bg-yellow-400 h-full w-12 hover:bg-yellow-500 ease-in-out duration-200 transition-all "
                    : "bg-green-400 h-full w-12 hover:bg-green-500 ease-in-out duration-200 transition-all "
                }`}
              >
                {task.status === "completed" ? (
                  <MdIncompleteCircle className="mx-auto text-slate-700  text-2xl " />
                ) : (
                  <FaCheckDouble className="mx-auto text-slate-700  text-2xl " />
                )}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-400 h-full w-12 hover:bg-red-500 ease-in-out duration-200 transition-all "
              >
                <MdDeleteForever className="mx-auto text-slate-700  text-[1.65rem]" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white flex justify-between ">
          <h1 className="p-3">No Task</h1>
        </div>
      )}
    </div>
  );
};

export default UserTable;
