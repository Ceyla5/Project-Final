import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
      });
      setMessage(res.data.message);
      setEmail('');
      setPassword('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Qeydiyyat uğursuz oldu');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Qeydiyyat</h2>
        {message && <p className="message">{message}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
        />
        <input type="password" placeholder="Şifrə" value={password} onChange={(e) => setPassword(e.target.value)} required
        />
        <button type="submit">Qeydiyyatdan Keç</button>
      </form>
    </div>
  );
}

export default Register;
