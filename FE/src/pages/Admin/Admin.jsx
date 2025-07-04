import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function Admin() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ name: '', order: true });
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setRole(payload.role);
    }

    axios.get('http://localhost:3000/travels')
      .then(res => setData(res.data));
  }, []);

  function handleDelete(id) {
  const token = localStorage.getItem("token");

  axios.delete(`http://localhost:3000/travels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(() => {
    axios.get('http://localhost:3000/travels')
      .then(res => setData(res.data));
  })
  .catch(err => {
    console.error("Silinmə zamanı xəta:", err);
    alert("Silməyə icazə yoxdur və ya token etibarsızdır.");
  });
}

  function handleSort(a, b) {
    if (!sort.name) return 0;
    if (sort.order) {
      return a[sort.name] > b[sort.name] ? 1 : b[sort.name] > a[sort.name] ? -1 : 0;
    } else {
      return a[sort.name] < b[sort.name] ? 1 : b[sort.name] < a[sort.name] ? -1 : 0;
    }
  }

  function handleWishlist(item) {
    alert(`"${item.name}" istək siyahısına əlavə edildi.`);
  }

  return (
    <>
      <title>Admin</title>
      <div className="admin-panel">
        
          {
            role === "admin" ? ( <h2>Admin Panel</h2> ) : ( <h2> Turlar</h2>)
          }
       

        <div className="admin-controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="sort-buttons">
            <button onClick={() => setSort({ name: 'price', order: true })}>↑ Price</button>
            <button onClick={() => setSort({ name: 'price', order: false })}>↓ Price</button>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              .toSorted(handleSort)
              .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
              .map((x) => (
                <tr key={x._id}>
                  <td><img src={x.image} alt="" className="thumb" /></td>
                  <td>{x.name}</td>
                  <td>{x.price.toFixed(2)} ₼</td>
                  <td>{x.contact?.phone}</td>
                  <td>
                    {role === 'admin' ? (
                      <button className="delete-btn" onClick={() => handleDelete(x._id)}>Delete</button>
                    ) : (
                      <button className="wishlist-btn" onClick={() => handleWishlist(x)}>Wishlist</button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
