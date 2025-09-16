import React from 'react';

function TextList({ tasks, setTasks }) {
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-4">No tasks yet. Add a task above!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-100 p-3 rounded-xl flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <span
                  onClick={() => handleToggleComplete(task.id)}
                  className={`w-5 h-5 border-2 rounded-full cursor-pointer ${
                    task.completed ? 'bg-green-400 border-green-400' : 'border-gray-400'
                  }`}
                ></span>
                <div>
                  <p
                    className={`text-lg ${
                      task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {task.text}
                  </p>
                  <p className="text-gray-500 text-sm">{task.date}</p>
                </div>
              </div>

              <span
                onClick={() => handleDelete(task.id)}
                className="text-2xl text-gray-400 hover:text-red-500 cursor-pointer"
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TextList;
