import React, { useState } from 'react';
import './addBlog.css'; 

function AddBlog() {
  // const [selectOption,setSelectOption] = useState('');
  // const [title,setTitle] = useState('');
  // const [description,setDescription] = useState('');

  const [addBlog,setAddBlog] = useState({
    title:'',
    category:'',
    description:''
  })

  const handleChange =(e) => {
    let Value = e.target.value;
    let fieldName = e.target.name;

    setAddBlog(prev => ({...prev,[fieldName]:Value}))
  }

  console.log(addBlog.category);

  function handleSubmit(){

    fetch('http://localhost:3000/blog/newBlog',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(addBlog)
    })
  }


  return (
    <>
    <div className="container-class d-flex justify-content-center align-items-center min-vh-100">
      <div className="inner-div p-5 bg-white shadow rounded w-100" style={{ maxWidth: '600px' }}>
        <h1 id="add-blog" className="text-center mb-4">Add Blog Here</h1>

        <div className="mb-4">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" placeholder="Enter Title" name='title' onChange={handleChange}/>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="form-label" >Category:</label>
          <select className="form-select" id="category"  name='category' value={addBlog.category} onChange={handleChange}>
            <option value='General'>General</option>
            <option value="Programming">Programming</option>
            <option value="Cooking">Cooking</option>
            <option value="Travelling">Travelling</option>
            <option value="Workout">Workout</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" placeholder="Enter Description" rows="4" name='description' onChange={handleChange}/>
        </div>

        <button className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </>
  );
}

export default AddBlog;
