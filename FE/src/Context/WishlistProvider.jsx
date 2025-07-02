import React, { createContext, useState } from 'react'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setwishlist] = useState([])

    function handleWishlist(obj) {
        const atWishlist = wishlist.some((x) => x._id === obj._id)
        if (atWishlist) {
            setwishlist(()=>  wishlist.filter((x) => x._id !== obj._id))
        }
        else {
            setwishlist([...wishlist, obj])
        }
    }
        function checkAtWishlist(obj) {
           return wishlist.some((x) => x._id === obj._id)
        }

    return (
        <WishlistContext.Provider value={{ wishlist, handleWishlist , checkAtWishlist }} >
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider