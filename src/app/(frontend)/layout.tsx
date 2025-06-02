import React from 'react'
import './styles.css'
import '../../css/global.css'
import { Header } from '@/components/Header'
import { cookies } from 'next/headers'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Homepage',
}

const currentUser = async () => {
  const cookieStore = cookies()
  const cookie = (await cookieStore).toString()
  const res = await fetch('http://localhost:3000/api/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
  })
  const data = await res.json()
  return data?.user?.name
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const user = await currentUser()

  return (
    <html lang="en">
      <body>
        <Header userdata={user} />
        <main>{children}</main>
      </body>
    </html>
  )
}
