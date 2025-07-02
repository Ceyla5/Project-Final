import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistProvider'
import "../../pages/Home/style.css"

function Wishlist() {
  const { wishlist, handleWishlist, checkAtWishlist } = useContext(WishlistContext)
  return (
    <>

      <title>Wishlist</title>

      <div className='cards'>
        {
          wishlist.map((x) =>
            <div key={x._id} className='card'>
              <div className='cardImg'> <img src={x.image} alt="" /></div>
              <div className='cardTitle'>
                <h4>{x.name}</h4>
                <h5>{x.description}</h5>
                <p>${x.price}</p>
              </div>
              <div>
                <button onClick={() => handleWishlist(x)}> wishlist {checkAtWishlist(x) ? "♥️" : '♡'}</button>
              </div>
            </div>)
        }

      </div>
    </>
  )
}

export default Wishlist