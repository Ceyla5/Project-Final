
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Admin() {
  const [data, setData] = useState([])
  const [search, setsearch] = useState('')
  const [sort, setsort] = useState({
    name: "",
    order: true
  })

  useEffect(() => {
    axios
      .get('http://localhost:3000/travels')
      .then(res => setData(res.data))
  }, [])

  function handleDelete(id) {
    console.log(id);
    axios
      .delete('http://localhost:3000/travels/' + id)
      .then(() =>
        axios
          .get('http://localhost:3000/travels')
          .then(res => setData(res.data)))
  }


  function handleSort(a, b) {
    if (!sort.name) return 0;
    if (sort.order) {
      return a[sort.name] > b[sort.name] ? 1 : b[sort.name] > a[sort.name] ? -1 : 0;
    } else {
      return a[sort.name] < b[sort.name] ? 1 : b[sort.name] < a[sort.name] ? -1 : 0;
    }
  }
  return (
    <>
        <title>Admin</title>

      <div>
        <input type="text" placeholder='Search Name' value={search} onChange={(e) => setsearch(e.target.value)} />
      </div>

      <div>
        <button onClick={() => setsort({ name: "price", order: true })}>Artan</button>
        <button onClick={() => setsort({ name: "price", order: false })}>Azalan</button>
      </div>

      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {
              data
                .toSorted(handleSort)
                .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                .map((x) =>
                  <tr key={x._id}>
                    <td> <img width={"70px"} src={x.image} alt="" /> </td>
                    <td> {x.name} </td>
                    <td>{x.price.toFixed(2)} Manat</td>
                    <td> <button onClick={() => handleDelete(x._id)}>Delete</button> </td>
                  </tr>)
            }
         </tbody>


        </table>


      </div>
    </>
  )
}

export default Admin