import React from 'react'

export default function Blog() {
  return (
    <div className='flex gap-3 flex-col sm:flex-row'>
        <div className="w-full sm:w-60 flex-none">
            <img className='' src="https://techcrunch.com/wp-content/uploads/2023/08/Yu_PressKit_Photo-Challenges.png?w=430&h=230&crop=1" alt="" srcSet="" />
        </div>
        <div className="">
            <h5 className="font-semibold max-w-md">The best apps are taking a page from mobile gaming</h5>
            <p className="">Retaining mobile app subscribers is harder than it was last year, but paywall optimization and gamified UX can help</p>
        </div>
    </div>
  )
}
