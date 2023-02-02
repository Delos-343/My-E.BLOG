/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug } : { categories: any, slug: any }) => {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {

    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => {setRelatedPosts(result)})
    } else {
      getRecentPosts()
        .then((result) => {setRelatedPosts(result)})
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className='bg-gray-900 text-gray-300 shadow-lg rounded-lg pb-12 p-8 mb-8 bg-opacity-25 backdrop-blur-md'>
      <h3 className='text-xl text-gray-200 mb-8 font-semibold border-b border-gray-800 pb-4'>
        { slug ? "Related Posts" : "Recent Posts" }
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className="w-16 flex-none pb-3 m-auto">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-xs'>
              {moment(post.createdAt).format("MM/DD/YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget