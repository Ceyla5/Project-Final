import React from 'react'
import './style.css'


function NoPage() {
  return (
    <>
      <div className="not-found">
        <h1 className="fade-in">404</h1>
        <p className="slide-up">Səhifə tapılmadı 😢</p>
        <a href="/" className="home-link">Ana səhifəyə qayıt</a>
      </div>
    </>
  )
}

export default NoPage