import axios from 'axios';
import "./style.css";
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', formData);
      alert('Qeydiyyat uğurla tamamlandı!');
      navigate('/login');
    } catch (err) {
      if (err.response?.status === 409) {
        alert("Bu email artıq istifadə olunub.");
      } else {
        alert("Qeydiyyat zamanı xəta baş verdi.");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Qeydiyyat</h4>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Şifrə"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <button type="submit">Qeydiyyatdan keç</button>
        <p className="forgot-password" onClick={() => navigate('/login')}>
          Artıq hesabınız var? Daxil olun
        </p>
      </form>
    </div>
  );
}

export default Register;
