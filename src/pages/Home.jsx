import React from 'react'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto space-y-12 sm:space-y-5 p-4'>
      <Blog/>
      <Blog/>
      <Blog/>
    </div>
  )
}
