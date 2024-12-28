import React from 'react';
import styles from './Button.module.css';
// import SignInIcon from '../assets/signIn.svg';
import ReactSignIn from "../assets/signIn.svg?react";

const Button = (props:buttonProps) => {
    const [loading, setLoading] = React.useState(false);
  
    function handleClick() {
        setLoading(true);
        setTimeout(() => setLoading(false), [2000]);
    }
    
    return (
            <button disabled={props.disabled} onClick={handleClick} className={styles.button + ' ' + props.className}>
                <div className={styles.textButton}>
                     {/* <img src={SignInIcon} />*/} <ReactSignIn /><span>{loading? "Loading..." : props.label}</span> 
                </div>
            </button>
    )
}

type buttonProps = {
    disabled?: boolean,
    label: string,
    className?: string,
    onClick?: () => void,
    image?: string,
    isLoading?: boolean,
    loadingText?: string,
} /*& typeof defaultButtonProps*/;

// const defaultButtonProps = {
//     classname: 'styles.button',
// }

export default Button;