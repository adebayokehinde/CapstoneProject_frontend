
import styles from './Register.module.css';

function Register() {
  return (
    <>
      <div className={styles.loginDiv}>
        <h1>register</h1>
        <input className={styles.name} type="text" placeholder='Name' />
        <input className={styles.email} type="email" placeholder="Email" />
        <input  className={styles.password} type="password" placeholder="Password" />
        <button className={styles.login}>Login</button>
      </div>
    </>
  );
}

export default Register;
