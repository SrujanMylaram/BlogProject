import React from 'react'
import './Footer.css'

function FooterPage() {
  return (
       <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>

        <div>
          <a href="#" className="text-light me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage
