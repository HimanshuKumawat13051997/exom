'use client'

import { useParams } from 'next/navigation'
import { Where } from 'payload'
import React, { useEffect, useState } from 'react'
import { stringify } from 'qs-esm'
import { ProductCard } from '@/components/ProductCard'

const SingleProductPage = () => {
  const [cate, setCate] = useState<any[] | null>(null)
  const param = useParams()
  const param1 = param?.slug
  const param2 = param?.slug2

  useEffect(() => {
    const query: Where = {
      'category.slug': {
        equals: param2,
      },
      'category.parent.slug': {
        equals: param1,
      },
    }
    const GetProducts = async (query: any) => {
      const stringfyQuery = stringify(
        {
          where: query,
        },
        { addQueryPrefix: true },
      )
      const req = await fetch(`http://localhost:3000/api/products${stringfyQuery}`)
      let d = await req.json()
      let final = d?.docs
      setCate(final)
    }
    GetProducts(query)
  }, [param.slug])

  return (
    <div className="box-border h-[calc(100vh-65px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2 justify-items-center">
      {!cate ? (
        <p></p>
      ) : (
        cate.map((d) => {
          return <ProductCard products={d} key={d.id} />
        })
      )}
    </div>
  )
}

export default SingleProductPage
