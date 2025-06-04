import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Taskify – Stay Organized',
  description:
    'Taskify is your ultimate task management app, designed to help you stay organized and boost productivity. Create, manage, and track your tasks effortlessly.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
