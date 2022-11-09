import React from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';

const PostDetails = () => {
  return (
    <div className="text-gray-100 text-4xl first-letter:text-orange-600 pl-20">
        Post<span className='text-orange-600'>D</span>etails
        <p className='text-gray-100 pt-8 text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            <br />
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            <br />
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            <br />
            optio, eaque rerum!
        </p>
    </div>
  );
}

export default PostDetails;