'use client'

import Link from 'next/link'

export const Category = ({ data }: any) => {
  return (
    <div className="cursor-pointer w-[calc(100%-50px)] sm:w-[80%] md:w-[40] h-80 border-2 box-border p-2 rounded flex flex-col items-start">
      <img src={`${data?.image?.url}`} alt="" className="w-full h-11/12 object-cover rounded" />
      <p className="mt-2 text-center h-1/12">
        <Link href={`${data.parent.slug}/${data.slug}`}>{data.name}</Link>
      </p>
    </div>
  )
}
