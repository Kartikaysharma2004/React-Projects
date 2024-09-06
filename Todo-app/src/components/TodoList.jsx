import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ text, onRemove, onToggleComplete, isCompleted }) => {
  return (
    <div className='flex items-center justify-between gap-2 pb-4'>
      <FontAwesomeIcon 
        icon={isCompleted ? faCircleCheck : faCircle} 
        className='cursor-pointer w-5'
        onClick={onToggleComplete} // Handle completion toggle
      />
      <div className='flex flex-1 items-center'>
        <p className={`text-slate-700 ml-4 text-[17px]  ${isCompleted ? 'line-through text-gray-400' : ''}`}>
          {text}
        </p>
      </div>
      <FontAwesomeIcon 
        icon={faTrashCan} 
        className='cursor-pointer w-3.5'
        onClick={onRemove} // Handle task removal
      />
    </div>
  );
};

export default TodoList;
