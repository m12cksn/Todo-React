import React from "react";

const selectOption = ({ setSelectedOption }) => {
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="mt-2">
      <select
        onChange={handleChange}
        className="text-lg w-64 px- bg-white py-1 outline-none "
        name=""
        id=""
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default selectOption;
