import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


function Detail() {
  const { id } = useParams()
  const [detail, setdetail] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/travels/'+ id)
      .then(res => setdetail(res.data))
  }, [id])

  return (
    <>
      <title>Detail</title>

      <div className='cards'>
        <div key={detail._id} className='card'>
          <div className='cardImg'><img src={detail.image} alt="" /></div>
          <div className='cardTitle'>
            <h4>{detail.name}</h4>
            <p>{detail?.price?.toFixed(2)} Manat</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default Detail