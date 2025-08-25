import React, { useState } from 'react'
import blogs from './Utlits/DummyData';

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape"
];


export default function SearchFunction() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  // console.log(filteredItems);
  console.log(blogs);


  return (
    <>
<div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search fruits..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div>
      <ul>
        {
          blogs.map((item) =>(
            <li key={item.id}>{item.id }{item.title}</li>
          ))
        }
        <li></li>
      </ul>
    </div>
    </>
    
  )
}
