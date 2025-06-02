'use client'
// import { GetCategories } from '@/app/lib/getCategories'
import { Category } from '@/components/Category'
import { useParams } from 'next/navigation'
import { Where } from 'payload'
import React, { useEffect, useState } from 'react'
import { stringify } from 'qs-esm'

const MensPage = () => {
  const [cate, setCate] = useState<any[] | null>(null)
  const param = useParams()
  const slug: string = param?.slug

  useEffect(() => {
    const query: Where = {
      'parent.slug': {
        equals: slug,
      },
    }

    const GetCategories = async (query: any) => {
      const stringfyQuery = stringify(
        {
          where: query,
        },
        { addQueryPrefix: true },
      )
      const req = await fetch(`http://localhost:3000/api/categories${stringfyQuery}`)
      let d = await req.json()
      let final = d?.docs
      setCate(final)
    }
    GetCategories(query)
  }, [param.slug])

  return (
    <div className="box-border h-[calc(100vh-65px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2 justify-items-center">
      {!cate ? (
        <p></p>
      ) : (
        cate.map((d) => {
          return <Category data={d} key={d.id} />
        })
      )}
    </div>
  )
}

export default MensPage
