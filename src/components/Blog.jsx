import React from "react";

export default function Blog({ title, content, author, createdAt }) {
  const date = new Date(createdAt);
  return (
    <div className="border-b py-3">
      {/* <div className="">
            <img className='w-full sm:w-auto' src={img} alt="" srcSet="" />
        </div> */}
      <div className="flex flex-col px-3">
        <h5 className="font-bold sm:max-w-md leading-none">{title}</h5>
        <p className="hidden sm:block">{content}</p>

        <div className="mt-3 space-y-1">
          <p className="text-sm leading-none text-slate-700 font-bold">
            {author}
          </p>
          <p className="text-sm leading-none text-gray-400">
            {createdAt.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}
