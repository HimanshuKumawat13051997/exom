'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

type Item = {
  id: number
  label: string
  name: string
  type: string
}

type Main = {
  forLogin: Item[]
  page: boolean
  handlePageChange: Function
}

type data = {
  email: string
  password: string
  name: string
}

const postlogin = async (data: data, url: string) => {
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const d = await req.json()
  return d
}

export const Logincomp = ({ fields }: { fields: Main }) => {
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: fields.forLogin.reduce((acc, field) => {
      acc[field.label as keyof data] = ''
      return acc
    }, {} as data),
  })

  const onSubmit: SubmitHandler<data> = async (data) => {
    let url: string = fields.page
      ? 'http://localhost:3000/api/users'
      : 'http://localhost:3000/api/users/login'
    let res = await postlogin(data, url)
    if (res.message === 'User successfully created.') {
      fields.handlePageChange()
    }
    if (res.message === 'Authentication Passed') {
      window.location.href = '/'
    }
    reset()
  }

  return (
    <form
      className=" w-10/12 sm:w-7/12 md:w-6/12 lg:w-3/12 flex flex-col gap-10 items-center h-full  p-5 bg-white shadow-2xl rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.forLogin.map((d) => {
        return (
          <div key={d.id} className="w-full flex justify-between items-center">
            <label htmlFor={`${d.label}`}>{d.name}</label>
            <div className=" w-9/12 p-2 border border-gray-400 rounded">
              <input
                type={`${d.type}`}
                {...register(d.label as keyof data)}
                name={`${d.label}`}
                className="w-full border-none border-gray-400 focus:outline-none"
              />
            </div>
          </div>
        )
      })}
      <button
        // onClick={handleSubmit(onSubmit)}
        className="bg-blue-600 text-white font-bold w-4/12  h-10 rounded-xl"
      >
        Submit
      </button>
      <button
        onClick={(e) => fields.handlePageChange(e)}
        className="bg-gray-600 text-white font-bold w-4/12  h-10 rounded-xl"
      >
        {fields.page ? 'Login' : 'Signup'}
      </button>
    </form>
  )
}
