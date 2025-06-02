'use client'

import { Logincomp } from '@/components/Logincomp'
import React, { useState } from 'react'

const LoginPage = () => {
  const [page, setPage] = useState(false)
  type Item = {
    id: number
    label: string
    name: string
    type: string
  }

  const forLogin: Item[] = [
    {
      id: 2,
      label: 'email',
      type: 'email',
      name: 'Email',
    },
    {
      id: 1,
      label: 'password',
      type: 'password',
      name: 'Password',
    },
  ]

  const handlePageChange = (e: any) => {
    e.preventDefault()
    setPage((prev) => !prev)
  }

  return (
    <div className="box-border h-[calc(100vh-65px)] flex flex-col  items-center gap-5 py-2">
      <Logincomp
        fields={{
          forLogin: page
            ? [
                ...forLogin,
                {
                  id: 3,
                  label: 'name',
                  type: 'text',
                  name: 'Name',
                },
              ]
            : forLogin,
          page,
          handlePageChange,
        }}
      />
    </div>
  )
}

export default LoginPage
