'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export const GridLayout = () => {
  const data = [
    {
      url: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 1,
    },
    {
      url: 'https://images.unsplash.com/photo-1748033766479-fa6b0f9f6b33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 2,
    },
    {
      url: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 3,
    },
    {
      url: 'https://images.unsplash.com/photo-1748033766479-fa6b0f9f6b33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 4,
    },
  ]

  const [mod, setMod] = useState(false)

  const [ur, setUr] = useState('')

  console.log(ur)
  const handleopen = (id: number) => {
    const u = data.find((d) => d.id === id)
    const url: string | undefined = u?.url
    setUr(url)
    setMod((prev) => !prev)
  }

  return (
    <div className="flex items-center border-2 justify-center h-157 relative">
      <div className="w-[80%] h-[70%] border-2 grid grid-cols-5 grid-rows-7 gap-4">
        <div className={`col-span-3 row-span-4 overflow-hidden ${mod ? 'invisible' : 'visible'}`}>
          <img
            className="object-fill"
            id={`${data[0].id}`}
            src={`${data[0].url}`}
            alt=""
            onClick={() => handleopen(data[0].id)}
          />
        </div>
        <div className="col-span-2 row-span-4 overflow-hidden col-start-4">
          <img
            id={`${data[1].id}`}
            className="object-fill"
            src={`${data[1].url}`}
            alt=""
            onClick={() => handleopen(data[1].id)}
          />
        </div>
        <div className="col-span-2 row-span-3 overflow-hidden row-start-5">
          <img className="object-fill" src={`${data[0].url}`} alt="" />
        </div>
        <div className="col-span-3 row-span-3 overflow-hidden col-start-3 row-start-5">
          <img className="object-fill" src={`${data[0].url}`} alt="" />
        </div>
      </div>
      {mod && <Card url={ur} />}
    </div>
  )
}

export const Card = ({ url }: { url: string }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute w-[80%] h-[70%] flex items-center justify-center"
    >
      <img src={`${url}`} alt="" className="size-90" />
    </motion.div>
  )
}
