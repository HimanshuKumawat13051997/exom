'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
  const { slug3 } = useParams() as { slug3: string }
  const [product, setProduct] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${slug3}`)
        const data = await res.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [slug3])

  if (loading) return <div className="p-10 text-center">Loading...</div>
  if (!product) return <div className="p-10 text-center text-red-500">Product not found.</div>

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="w-full border rounded-lg overflow-hidden shadow-md">
        <img
          src={product.images?.[0]?.image?.url || '/fallback.jpg'}
          alt={product.images?.[0]?.image?.alt || product.name}
          className="w-full h-[450px] object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">
          {product.category?.parent?.name} &gt; {product.category?.name}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Price */}
        <p className="text-xl font-semibold text-green-600">₹{product.price}</p>

        {/* Attributes */}
        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Product Details:</h2>
          <ul className="space-y-1 text-sm">
            {product.attributeValues?.map((attr: any) => (
              <li key={attr.id}>
                <span className="font-medium capitalize">{attr.attribute.name}:</span> {attr.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart Button (Optional) */}
        <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductPage
