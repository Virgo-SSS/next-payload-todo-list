'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function CreateTodoAction(data: FormData): Promise<void> {
  const payload = await getPayload({ config })
  const title = data.get('title')
  const description = data.get('description')
  const media = data.get('media')

  if (!title || !description) {
    throw new Error('Title and description are required')
  }

  if (media && !(media instanceof File)) {
    throw new Error('Media must be a file')
  }

  let photo
  if (media) {
    const formData = new FormData()
    formData.append('file', media)
    formData.append(
      '_payload',
      JSON.stringify({
        alt: 'Alt ' + title,
      }),
    )

    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error('Media upload failed: ' + errorData)
    }

    const mediaData = await response.json()
    photo = mediaData.doc.id
  }

  try {
    await payload.create({
      collection: 'todos',
      data: {
        title: title ? String(title) : '',
        description: description ? String(description) : '',
        photo: photo ? photo : undefined,
      },
    })
  } catch (error) {
    console.error('Error creating todo:', error)
    throw new Error('Failed to create todo')
  }
}
