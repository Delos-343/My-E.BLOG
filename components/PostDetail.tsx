/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import React from 'react'

const PostDetail = ({ post } : { post: any }) => {
  return (
    <>
      <div className='bg-gray-900 text-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 bg-opacity-25 backdrop-blur-md'>
        <div className='relative overflow-hidden shadow-md pb-8 mb-6'>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className='object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg opacity-85'
            />
        </div>
        
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {console.log(post.content.raw)}
        </div>
      </div>
    </>
  )
}

export default PostDetail