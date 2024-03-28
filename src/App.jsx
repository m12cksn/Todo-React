import { useState } from "react";

import AddForm from "./components/Form/AddForm";
import SelectOption from "./components/selectOption";
import UserTable from "./components/Tables/UserTable";

const App = () => {
  const taskData = [
    { id: 1, task: "Menyiapkan takjil", status: "incompleted" },
    { id: 2, task: "Sholat Taraweh", status: "incompleted" },
    { id: 3, task: "Berpuasa", status: "completed" },
  ];

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const [tasks, setTasks] = useState(taskData);
  const [selectedOption, setSelectedOption] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (selectedOption === "all") {
      return true;
    } else {
      return task.status === selectedOption;
    }
  });

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toogleStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "completed" ? "incompleted" : "completed";
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gradient-to-b from-cyan-500 via-sky-400 to-cyan-400 w-full h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center py-5 text-2xl">
          <h1 className="text-white mb-3 font-bold">Add New Todo</h1>
          <AddForm addTask={addTask} />
          <SelectOption setSelectedOption={setSelectedOption} />
        </div>
        <div className="py-5">
          <h1 className="text-center mb-3 text-2xl text-white font-bold">
            Todos
          </h1>
        </div>
        <UserTable
          tasks={filteredTasks}
          toogleStatus={toogleStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
