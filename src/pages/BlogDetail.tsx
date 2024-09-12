import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { postType } from '../types';

const BlogDetail = () => {
    let { id } = useParams();
    const [post,setPost] = useState<postType>({} as postType);
    
    useEffect(()=>{
        const fetchPosts = async()=>{
            const data = await fetch(`http://localhost:8000/api/posts/${id}`);
            const res = await data.json()
            setPost(res.data)
        }
        fetchPosts()
    },[id])

    const date = new Date(post?.created_at)
  return (
    <div>
     <div className=' py-[3rem] text-[18px]'>
        <p className='text-center text-[#000000a3] py-[0.5rem]'>{date.toDateString()}</p>
        <h1 className='text-[2.5rem] text-center font-bold'>{post.title}</h1>
        <main className='px-[3rem]'>
            {post.content}
        </main>
      </div>
    </div>
  )
}

export default BlogDetail