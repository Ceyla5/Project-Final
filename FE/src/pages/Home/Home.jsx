import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
import { WishlistContext } from '../../Context/WishlistProvider'
import { Link } from 'react-router'
import { LanguageContext } from '../../Context/LanguageProvider.jsx'

function Home() {
  const [data, setData] = useState([])
  
  const { handleWishlist, checkAtWishlist } = useContext(WishlistContext)

  useEffect(() => {
    axios
      .get('http://localhost:3000/travels')
      .then(res => setData(res.data))
  }, [])
  
    const { t } = useContext(LanguageContext);

  return (
    <>
      <title>Home</title>

      <div className='home' >
        <div className='hero'>
          <div className='hero-text'>
            <h2>{t.heroTitle}</h2>
            <p>{t.heroDesc}</p>
            <div className='btn'><button>{t.heroBtn}</button></div>
          </div>
        </div>

        <div className='cards'>
          {
            data.map((x) =>
              <div key={x._id} className='card'>
                <div className='cardImg'> <img src={x.image} alt="" /></div>
                <div className='cardTitle'>
                  <h4>{x.name}</h4>
                  <p>{x.price.toFixed(2)} {t.price}</p>
                </div>
                <div className='cardBtn'>
                  <button onClick={() => handleWishlist(x)}>{checkAtWishlist(x) ? "♥️" : '♡'}</button>
                  <Link to={`detail/${x._id}`}><button>{t.detail}</button></Link>
                </div>
              </div>)
          }
        </div>
      </div>

    </>
  )
}

export default Home