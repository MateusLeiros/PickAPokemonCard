import React from 'react';
import styles from './Button.module.css';
import SignInIcon from '../assets/signIn.svg';

const Button = () => {
    return (
            <button className={styles.button}>
                <div className={styles.textoBotao}>
                    <img src={SignInIcon} /> Sign in                    
                </div>
            </button>
    )
}


export default Button;