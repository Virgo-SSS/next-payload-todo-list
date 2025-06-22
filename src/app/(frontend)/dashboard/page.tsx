'use client'

import { getPayload } from 'payload'
import React, { useEffect, useState } from 'react'
import config from '@payload-config'
import Link from 'next/link'
import { Pencil, Plus, Trash } from 'lucide-react'
import { Todo } from '@/payload-types'

export default function Dashboard() {
  const [todos, setTodos] = useState<Array<Todo>>([])

  useEffect(() => {
    async function fetchTodos() {
      console.log('Fetching todos from Payload API')
      const req = fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/todos`)
      req
        .then((res) => res.json())
        .then((data) => {
          setTodos(data.docs || [])
        })
        .catch((error) => {
          console.error('Error fetching todos:', error)
        })
    }

    fetchTodos()
  }, [])

  // In a real app, these handlers would make API calls to your Payload backend.
  const handleToggleComplete = async (id: string) => {
    console.log(`Toggling completion for todo with id: ${id}`)

    const req = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/todos/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todos.find((todo) => todo.id === id)?.completed,
      }),
    })
    const data = await req.json()

    if (req.ok) {
      console.log(`Todo with id ${id} updated successfully`, data)
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: data.doc.completed } : todo,
        ),
      )
    } else {
      console.error('Error updating todo:', data)
    }
  }

  const handleEdit = (id: string) => {
    // This would typically open a modal or an inline editing form.
    const newText = prompt('Enter new todo text:')
    if (newText) {
      console.log(`Editing todo with id: ${id}`)
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      console.log(`Deleting todo with id: ${id}`)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your to-do list.</p>
          </div>
          <Link
            href={`/todos/create`}
            className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200 mt-4 sm:mt-0"
          >
            <Plus />
            Add New Todo
          </Link>
        </header>

        {/* Todo List Section */}
        <main>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className={`flex items-center p-4 transition-colors duration-300 ${todo.completed ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center flex-grow">
                      <input
                        type="checkbox"
                        checked={todo.completed || false}
                        onChange={() => handleToggleComplete(todo.id)}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <Link href={`/todos/${todo.id}`} className="flex-grow ml-3">
                        <span
                          className={`ml-4 text-gray-700 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                        >
                          {todo.title}
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="p-1 rounded-full">
                        <Pencil />
                      </button>
                      <button className="p-1 rounded-full">
                        <Trash />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-6 text-center text-gray-500">
                  You're all caught up! No todos to show.
                </li>
              )}
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
