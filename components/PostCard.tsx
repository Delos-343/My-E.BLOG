import React from 'react'

const PostCard = ({ post } : { post: any }) => {
  return (
    <div>
        {post.title}
        <br />
        {post.excerpt}
        <br /> <br />
    </div>
  )
}

export default PostCard