import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import TodoList from "./TodoList"; // Importing the TodoList component

const Todo = () => {
  // State to hold the list of tasks
  const [todolist, settodolist] = useState([]);
  const [CompletedTask, setCompletedTask] = useState({});

  // Reference for accessing the input field directly
  const inputref = useRef();

  // Function to handle adding a new task
  const add = () => {
    const inputText = inputref.current.value.trim(); // Get the value from the input field and trim whitespace
    if (inputText) {
      const id = Date.now();
      // Check if the input is not empty
      settodolist((prevList) => [...prevList, {id, text: inputText}]); // Update state by adding the new task to the list
      setCompletedTask((prevTasks) => ({
        ...prevTasks,
        [id]: false, // Initialize task as not completed
      }));
      inputref.current.value = ""; // Clear the input field after adding the task
    }
  };

  const handleRemove = (id) => {
    settodolist((prevList) => prevList.filter((item) => item.id !== id));
    setCompletedTask((prevTasks) => {
      const newTasks = { ...prevTasks };
      delete newTasks[id];
      return newTasks;
    });
  };

  const handleToggleComplete = (id) => {
    setCompletedTask((prevTasks) => ({
      ...prevTasks,
      [id]: !prevTasks[id],
    }));
  };

  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto p-7 max-w-md font-semibold text-3xl mt-20 rounded-xl min-h-[500px] bg-white">
        {/* Header section with the app title */}
        <div className="flex items-center gap-2 mt-7">
          <h1>
            <FontAwesomeIcon icon={faListCheck} /> Todo App
          </h1>
        </div>

        {/* Input field and Add button container */}
        <div className="flex my-7 w-full max-w-lg flex-wrap mx-auto">
          <input
            ref={inputref} // Reference to input field for direct access
            type="text"
            className="border-0 outline-none rounded-full shadow-md max-sm:mb-4 bg-gray-200 flex-1 h-12 px-4 placeholder:text-gray-500 text-base"
            placeholder="Add your task" // Placeholder text for the input
          />
          <button
            onClick={add} // Trigger the add function on button click
            className="mr-0 bg-orange-500 hover:bg-orange-600 shadow-md max-sm:mx-auto text-white font-semibold text-lg h-12 py-2 px-8 rounded-full transition duration-300 ease-in-out"
            type="button"
          >
            Add
          </button>
        </div>

        {todolist.map((task, index) => (
          <TodoList
            key={task.id}
            text={task.text}
            onRemove={() => handleRemove(task.id)} // Pass remove function
            onToggleComplete={() => handleToggleComplete(task.id)} // Pass toggle function
            isCompleted={CompletedTask[task.id]} // Pass completion status
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
