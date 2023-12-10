import React from "react";
import { formatDistance } from "date-fns";
import { useGetUserByIdQuery } from "../app/services/userApi";

export default function Blog({ title, content, author, createdAt }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(createdAt);
  const formatedDate = formatDistance(new Date(createdAt), new Date(), {});

  const { data } = useGetUserByIdQuery(author);
  console.log("The author is: ", data);

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
            By {author}
          </p>
          <p className="text-sm leading-none text-gray-400 font-bold">
            {formatedDate} ago, on{" "}
            {`${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()}`}
          </p>
        </div>
      </div>
    </div>
  );
}
