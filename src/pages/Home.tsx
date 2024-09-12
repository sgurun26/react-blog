import React, { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import { postType } from "../types";

const Home = () => {
    const [posts,setPosts] = useState<postType[]>([]);

    useEffect(()=>{
        const fetchPosts = async()=>{
            const data = await fetch("http://localhost:8000/api/posts");
            const res = await data.json()
            setPosts(res.data)
        }
        fetchPosts()
    },[])
  return (
    <>
    <section className='mt-8'>
        <div className='text-center'>
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
            <p className="text-gray-600  my-3">Blogs that are loved by the community. Updated every hour.</p>
        </div>
    </section>

   <section className='px-[5%]'>
        {
            posts.map((x)=>{
                return <BlogPost key={x._id} title={x.title} id={x._id}/>
            })
        }
   </section>
    </>
  );
};

export default Home;
