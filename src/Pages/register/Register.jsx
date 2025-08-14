import { useState } from 'react';
import styles from './register.module.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [role, setRole] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    licenseNumber: '',
    truckInfo: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate storing the role
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    alert(`Registered successfully as a ${role}`);
    navigate('/map');
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Register as {role === 'client' ? 'Client' : 'Driver'}</h2>

      <div className={styles.roleSelector}>
        <button
          className={role === 'client' ? styles.active : ''}
          onClick={() => setRole('client')}
        >
          Client
        </button>
        <button
          className={role === 'driver' ? styles.active : ''}
          onClick={() => setRole('driver')}
        >
          Driver
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {role === 'driver' && (
          <>
            <input
              type="text"
              name="licenseNumber"
              placeholder="License Number"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="truckInfo"
              placeholder="Truck Info"
              value={formData.truckInfo}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
