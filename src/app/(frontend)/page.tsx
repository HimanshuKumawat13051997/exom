import React from 'react'
import './styles.css'
import { HomepageS1 } from '@/components/HomepageS1'
import { HomepageS2 } from '@/components/HomepageS2'

export default async function HomePage() {
  return (
    <div className="">
      <HomepageS1 />
      <HomepageS2 />
    </div>
  )
}
