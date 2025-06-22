import { CreateTodoAction } from '@/app/actions/create-todo-action'
import Form from 'next/form'
import Link from 'next/link'

export default function CreateTodo() {
  return (
    <>
      <Link href="/dashboard" className="absolute top-4 left-4 text-blue-600 hover:underline">
        Back to Dashboard
      </Link>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Create Todo</h1>
          <Form action={CreateTodoAction} className="w-full space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="media"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200"
            >
              Create Todo
            </button>
          </Form>
        </div>
      </div>
    </>
  )
}
