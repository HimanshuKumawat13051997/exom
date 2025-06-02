import React from 'react'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Mens Clothing',
}

export default async function SingleLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <main>{children}</main>
}
