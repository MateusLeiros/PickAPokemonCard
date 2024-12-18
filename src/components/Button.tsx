import React from 'react';
import styles from './Button.module.css';
import SignInIcon from '../assets/signIn.svg';

const Button = (props:buttonProps) => {
    
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(!loading);
        console.log(loading);
    }


    return (
            <button disabled={props.disabled} onClick={handleClick} className={styles.button}>
                <div className={styles.textButton}>
                    <img src={SignInIcon} /> <span>{props.label}</span>                    
                </div>
            </button>
    )
}

type buttonProps = {
    disabled?: boolean,
    label: string,
    className?: string,
    onClick: () => void,
    // isLoading?: boolean,
    image?: string,
} /*& typeof defaultButtonProps*/;

// const defaultButtonProps = {
//     classname: 'styles.button',
// }

export default Button;