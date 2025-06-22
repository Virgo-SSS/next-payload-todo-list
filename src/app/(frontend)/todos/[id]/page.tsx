import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function Todo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const payload = await getPayload({ config })
  const todo = await payload.findByID({
    collection: 'todos',
    id,
  })
  console.log('Fetched todo:', todo)
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <Link href="/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">
        Back to dashboard
      </Link>
      <h1 className="text-2xl font-bold mb-4">Todo Details</h1>
      <div className="mb-2">
        <strong>ID:</strong> {todo.id}
      </div>
      <div className="mb-2">
        <strong>title:</strong> {todo.title}
      </div>
      <div className="mb-2">
        <strong>Description:</strong> {todo.description || 'No description provided'}
      </div>
      <div className="mb-2">
        <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}
      </div>
      <div className="mb-2">
        <strong>Created At:</strong> {new Date(todo.createdAt).toLocaleString()}
      </div>
      <div className="mb-2">
        <strong>Updated At:</strong> {new Date(todo.updatedAt).toLocaleString()}
      </div>
      {todo.photo && (
        <div className="mt-4">
          <Image
            src={typeof todo.photo === 'string' ? todo.photo : todo.photo?.url || ''}
            alt={todo.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  )
}
