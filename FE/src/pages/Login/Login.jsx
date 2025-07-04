import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert("Login successful!");
      // burda redirect edə bilərsən, məsələn: navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>

      <title>Login</title>

      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Şifrə" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Daxil ol</button>
        </form>
      </div>
    </>
  );
}

export default Login;
