// components/MarqueeBanner.tsx
'use client'

import { motion } from 'framer-motion'

const text = 'NEW SEASON * %20 DISCOUNT * '

export  const HomepageS2 = () => {
  return (
    <div className="mt-2 overflow-hidden bg-yellow-400 whitespace-nowrap w-full py-4">
      <motion.div
        className="flex gap-10 text-black font-bold text-lg"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
        }}
      >
        {/* Repeat content several times to ensure smooth scrolling */}
        {Array(10).fill(text).map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
    </div>
  )
}
