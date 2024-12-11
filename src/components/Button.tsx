import React from 'react';
import styles from './Button.module.css';
import SignInIcon from '../assets/signIn.svg';

const Button = () => {
    return (
        <div>
            <button className={styles.button}><img src={SignInIcon} /><div> Sign in</div></button>
        </div>
    )
}


export default Button;