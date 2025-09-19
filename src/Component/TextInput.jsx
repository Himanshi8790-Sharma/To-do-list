import { useState, useEffect } from 'react';
import TextList from './TextList';

function TextInput() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: task,
          date: date || 'No date',
          completed: false,
        },
      ]);
      setTask('');
      setDate('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700">
      <div className="bg-white w-[600px] h-auto min-h-[200px] rounded-xl p-6 shadow-lg">
        <h2 className="text-blue-600 text-4xl font-bold mb-6">
          To-Do List <span role="img" aria-label="memo">📝</span>
        </h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Add your task"
            className="bg-gray-100 rounded-full px-4 py-2 w-full text-gray-700 placeholder-gray-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-100 rounded-full px-3 text-gray-600"
          />
          <button
            onClick={handleAddTask}
            className="bg-red-400 hover:bg-red-500 text-white px-6 rounded-full transition-all"
          >
            Add
          </button> 
        </div>

        <TextList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default TextInput;
