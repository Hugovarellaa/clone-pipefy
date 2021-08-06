import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'

export function SignInButton(){
    const isUserLoggedIn = true
    
    return(
       isUserLoggedIn ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="var(--green-500)"/>
            Hugo Alves
            <FiX color="var(--gray-400)" className={styles.closeIcon}/>
        </button>           
       ) : (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="var(--yellow-500)"/>
            Signin in With Github
        </button>
       )
    )
}