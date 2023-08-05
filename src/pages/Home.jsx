import React from 'react'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto space-y-12 sm:space-y-5 p-4'>
      <Blog img='https://techcrunch.com/wp-content/uploads/2023/08/Yu_PressKit_Photo-Challenges.png?w=430&h=230&crop=1'/>
      <Blog img='https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1241184618.jpg?w=850&h=492&crop=1'/>
      <Blog img='https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1487613502.jpg?w=430&h=230&crop=1'/>
    </div>
  )
}
