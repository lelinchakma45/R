import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

const TodoForm = ({ addTodo, darkMode }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          className={`flex-grow p-2 border-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            darkMode
              ? 'bg-gray-800 text-white border-gray-700'
              : 'bg-white text-gray-800 border-gray-300'
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  )
}

export default TodoForm
