import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    id:string
  }

const BlogPost = ({title,id}:Props) => {
  return (
    <Link to={`/${id}`}>
    <article className='my-[2rem] p-[15px] text-[20px]' style={{border:"1px solid #ddd"}}>
        <h1 className='text-[1.5rem] mb-4 font-[600] hover:text-blue-600'>{title}</h1>
        <p className='bg-blue-600 text-white w-[fit-content] text-[18px] px-[1rem] py-[0.4rem] rounded-lg' >Read more</p>
    </article>
    </Link>
  )
}

export default BlogPost