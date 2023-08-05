import React from 'react'

export default function Blog({ img }) {
  return (
    <div className='grid grid-cols-blog sm:grid-rows-none border-b py-3'>
        <div className="">
            <img className='w-full sm:w-auto' src={img} alt="" srcSet="" />
        </div>
        <div className="px-3">
            <h5 className="font-bold sm:max-w-md leading-none">The best apps are taking a page from mobile gaming</h5>
            <p className="hidden sm:block">Retaining mobile app subscribers is harder than it was last year, but paywall optimization and gamified UX can help.</p>

            <div className="mt-3 space-y-1">
                <p className="text-sm leading-none text-slate-700 font-bold">Kono Steve</p>
                <p className="text-sm leading-none text-gray-400"> 2023-08-05 15:34:12</p>
            </div>
        </div>
    </div>
  )
}
