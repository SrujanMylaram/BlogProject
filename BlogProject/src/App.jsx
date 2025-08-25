import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import NavBar from './Components/NavBar'
import Home from './Home'
import FooterPage from './Components/FooterPage'
import Banner from './Banner/Banner'
import CategoryBlog from './CategoryBlog'
import DedicatedPage from './DedicatedPage/DedicatedPage'
import AddBlog from './Components/addBlog'
import SearchFunction from './SearchFunction'

function App() {
  
  return (
   <>
    <NavBar/>
    <Routes>
       <Route path='/' element= {<Home/>} />
      <Route path='/Login' element= {<Login/>} />
      <Route path='/Register' element= {<Register/>} />
       <Route path='/Blogs/:category' element= {<CategoryBlog/>} />
      <Route path='/Blogs/:id' element= {<DedicatedPage/>} />
      <Route path='/addBlog' element= {<AddBlog/>} />
      <Route path='/search' element={<SearchFunction/>}/>
     </Routes>
     <FooterPage/>
    </>
  )
}

export default App
