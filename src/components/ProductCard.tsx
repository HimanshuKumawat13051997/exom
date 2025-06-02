'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export const ProductCard = ({ products }: any) => {
  const images = products.images[0].image.url
  return (
    <Link
      className="cursor-pointer w-[calc(100%-50px)] sm:w-[80%] md:w-[40] h-80 border-2 box-border p-2 rounded flex flex-col items-start"
      href={`${products.category.slug}/${products.id}`}
    >
      <img src={`${images}`} alt="" className="w-full h-10/12 object-cover rounded" />
      <p className="text-[14px] mt-2 text-center h-1/12">Name: {products.name}</p>
      <p className="text-[14px] mt-2 text-center h-1/12">Price: ₹{products.price}</p>
    </Link>
  )
}
