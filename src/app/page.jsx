'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  
  //receiving all blogs.
  useEffect(async ()=> {
    await fetch("http://localhost:8000/all-blogs").then((data)=> {
      setBlogs(data.json())
    }).catch((error) => {
      console.log("error.")
    })     
  }, [])

  return (
    <div className="container justify-evenly flex">
      {
        //looping over the blogs and creating an infinite scroll (as many post db has, it will show all of them so, infinite posts.)
        blogs.map((blog) => 
        {
          <div key={blog.index} onClick={`./user/[[..blogNo]]/page.jsx`}>
            <div className="">
              <img src={blog.image} alt="image" />
            </div>
            <div className="">
              <h1 className="font-extrabold">{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </div>
        })
      }
      <h1>hello</h1>
    </div>
  );
}

