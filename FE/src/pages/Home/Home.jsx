import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
import { WishlistContext } from '../../Context/WishlistProvider'
import { Link } from 'react-router'
import { LanguageContext } from '../../Context/LanguageProvider.jsx'
import ImageSlider from '../../Companents/Slider/ImageSlider.jsx'
import { ThreeDot } from 'react-loading-indicators';


function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { handleWishlist, checkAtWishlist } = useContext(WishlistContext)
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    axios.get('http://localhost:3000/travels')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return ( 
    <div className="loading-text">
      <ThreeDot variant="bounce" color="#319bcc" size="large" text="LOADING" textColor="" />
      </div> )
  }

  return (
    <>
      <title>Home</title>

      <ImageSlider />
      <div className='home'>
         <h1 className="page-title">{t.tours}</h1> 
        <div className='cards'>
          {data.map((x) =>
            <div key={x._id} className='card'>
              <div className='cardImg'> <img src={x.image} alt="" /></div>
              <div className='cardTitle'>
                <h4>{x.name}</h4>
                <p>{x.price.toFixed(2)} {t.price}</p>
              </div>
              <div className='cardBtn'>
                <button onClick={() => handleWishlist(x)}>
                  {checkAtWishlist(x) ? "♥️" : '♡'}
                </button>
                <Link to={`detail/${x._id}`}><button>{t.detail}</button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
