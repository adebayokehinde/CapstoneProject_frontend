import styles from './Login.module.css';
import { Link } from 'react-router-dom'; // ✅ Import Link

function Login() {
  return (
    <>
      <div className={styles.loginDiv}>
        <h1>Login</h1>

        <input className={styles.email} type="email" placeholder="Email" required />
        <input className={styles.password} type="password" placeholder="Password" required />
        <button className={styles.login}>Login</button>

        {/* ✅ Register Text Link */}
        <p className={styles.registerText}>
          Don't have an account?{' '}
          <Link to="/register" className={styles.registerLink}>
            Register
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
