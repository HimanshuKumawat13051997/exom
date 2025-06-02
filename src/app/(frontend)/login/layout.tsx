import React from 'react'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Login',
}

export default async function LoginLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <main>{children}</main>
}
