import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <>
    <div className='banner-dev'>
        <div className='overlay'>
            <h1 id='banner-title'>Welcome to our Blogs</h1>
        </div>
      <img src="/HomeBanner.jpg" alt="banner" width={'100%'} height={'600px'} style={{objectFit:'cover'}}/>
    </div>
    </>
  )
}
