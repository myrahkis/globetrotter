import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContex";
import styles from './user.module.css';

function User() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function logoutHandle() {
        logout();
        navigate('/');
    }

    return(
        <div className={styles['container']}>
            <img src={user.avatar} alt="ava" className={styles['ava']}/>
            <p>Welcome back, {user.name}</p>
            <button onClick={logoutHandle} className={styles['logout-btn']}>Logout</button>
        </div>
    );
}

export default User;