import React from 'react';
import styles from './Button.module.css';
import SignInIcon from '../assets/signIn.svg';

const Button = (props:buttonProps) => {
    
    return (
            <button disabled={props.disabled} onClick={props.onClick} className={styles.button + ' ' + props.className}>
                <div className={styles.textButton}>
                    <img src={SignInIcon} /> <span>{props.isLoading? props.loadingText : props.label}</span>                    
                </div>
            </button>
    )
}

type buttonProps = {
    disabled?: boolean,
    label: string,
    className?: string,
    onClick: () => void,
    image?: string,
    isLoading?: boolean,
    loadingText: string,
} /*& typeof defaultButtonProps*/;

// const defaultButtonProps = {
//     classname: 'styles.button',
// }

export default Button;