import React, { useState,useEffect } from 'react'
import Banner from './Banner/Banner'
import TrendingBLogs from './TrendingBLogs'
import blogs from './Utlits/DummyData'
import './Category.css'
import { useParams } from 'react-router-dom'

function CategoryBlog() {
  const [currCategory,setCurrCategory] = useState('');
  const { category } = useParams();
  console.log('line no-11',category);

 useEffect(()=>{
  if(category){
    setCurrCategory(category)
  }
 },[])

  return (
    <>
    <Banner/>
    <div className='trending-container my-2'>
    <h1>{currCategory}</h1>
      <div className='trendingBlog-dev d-flex justify-content-between flex-wrap gap-2'>
        {
          blogs.map(blog=> blog.category == currCategory &&
              
               <TrendingBLogs blog={blog}/>
          )
        }
        
      </div>
    </div>
    </>
  )
}

export default CategoryBlog
