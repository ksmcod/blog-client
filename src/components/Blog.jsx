import React from 'react'

export default function Blog({ img }) {
  return (
    <div className='grid grid-cols-blog sm:grid-rows-none border-b py-3'>
        <div className="">
            <img className='w-full sm:w-auto sm:h-full' src={img} alt="" srcSet="" />
        </div>
        <div className="px-3">
            <h5 className="font-bold sm:max-w-md">The best apps are taking a page from mobile gaming</h5>
            <p className="hidden sm:block">Retaining mobile app subscribers is harder than it was last year, but paywall optimization and gamified UX can help Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quasi.</p>

            <p className="text-sm py-1">Kono Steve 2023-08-05</p>
        </div>
    </div>
  )
}
