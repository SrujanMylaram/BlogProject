import React from 'react'
import './Trending.css'
import { Link } from 'react-router-dom';



export default function TrendingBLogs({blog}) {

  let image = '';

  switch(blog.category){
    case "Programming":
      image='Programming.jpg'
      break;
    case "Cooking":
      image='cooking.jpg'
      break;
    case "Workout":
      image='workout.jpg'
      break;
    default:
      image='Banner.jpg'
      break;
  }

  console.log('Line no-25', blog.category ,'->', image);

  return (
    <>
   <div className="card" style={{ width: '18rem' }}>
        <img
          src={`/${image}`}
          className="card-img-top"
          alt="Sample"
          />
        <div className="card-body">
    <Link to={`/Blogs/${blog.id}`}>
          <h5 className="card-title">{blog.title}</h5>
          </Link>
          
          <p className="card-text">
           {blog.category}
          </p>

          <p className="card-text">
           {blog.previewDescription}
          </p>
      </div>
    </div>
    </>
  )
}
