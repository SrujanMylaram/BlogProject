import React, { useEffect,useState } from 'react';
import './DedicatedPage.css';
import Banner from '../Banner/Banner';
import blogs from '../Utlits/DummyData';
import { useParams } from 'react-router-dom';

export default function DedicatedPage() {
  const[blogId ,setBlogId] = useState(1);
  let blogToDisplay = blogs.filter(blog=>blog.id === blogId)[0];
  const { id } = useParams();
  
  useEffect(()=>{
    if(id){
        setBlogId(id);
    }
  },[])


  return (
    <>
      <Banner />
      <div>
        <h1>Welcome to Dedicated Page</h1>
        <h1>{blogToDisplay.title}</h1>
        <h5>{blogToDisplay.category}</h5>
        <p>{blogToDisplay.content}</p>
      </div>
    </>
  );
}
