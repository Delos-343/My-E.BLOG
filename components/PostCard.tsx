/* eslint-disable @next/next/no-img-element */
import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post } : { post: any }) => {

  console.log(post)

  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 bg-opacity-25 backdrop-blur-md'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg opacity-85'
          />
        </div>
        <h1 className='transition duration-700 text-center text-gray-200 pt-5 mb-2 cursor-pointer
                     hover:text-white text-3xl md:text-6xl font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-white ml-4 text-sm'>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className='align-middle ml-2'>
              {moment(post.createdAt).format("MM/DD/YYYY")}
            </span>
          </div>
        </div>
        <p className='text-center text-2xl sm:text-3xl text-white font-medium px-4 lg:px-20 mb-20'>
          {post.excerpt}
        </p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='inline-block duration-500 ease transform hover:-translate-y-1 bg-gray-900 bg-opacity-50 border-0 hover:border hover:border-orange-500 active:bg-red-600 font-semibold text-gray-200 px-8 py-4 cursor-pointer'>
              Continue Reading &nbsp; ⇂
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard