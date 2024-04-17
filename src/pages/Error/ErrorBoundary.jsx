import { useNavigate } from "react-router-dom"
import styles from './errorBoundary.module.css'

const ErrorBoundary = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate('/')
    return (
        <div className={styles.container}>
            <div className={styles.errorBox}>
                <h1>404</h1>
                <h3 className="fw-600">Error!!</h3>
                <h4>Page Not Found</h4>
                <button onClick={handleClick} className="btn btn-primary" >Go Back</button>
            </div>
        </div>
    )
}

export default ErrorBoundary;