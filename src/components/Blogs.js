import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Blogs = () => {
    const[blogData,setBlogData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setBlogData(data));
    },[])
  return (
    <>
        <h1>Blogs</h1>
    {
        blogData.map((curElem)=>{
            
            return(
                <div key={curElem.id}> 
                    <Cards curElem={curElem}/>
                </div>
            )
        })
    }
    </>
  )
}

export default Blogs