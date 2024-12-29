import React from 'react';
import styles from './Button.module.css';
import SignIn from "../assets/signIn.svg?react";

const Button = (props:buttonProps) => {
    const [loading, setLoading] = React.useState(false);
  
    const getPokemonCard = async () => {
        // console.log("começou o fetch")
        const response = await fetch(
            "https://api.tcgdex.net/v2/en/cards/swsh3-136"
        );
        const json = await response.json();
        console.log(json);
        // console.log("terminou o fetch");
        setLoading(false);
    };
    
    React.useEffect(() => {
    // console.log("entrou no useEffect");
    getPokemonCard();
    // console.log("saiu do useEffect");
    }, [loading]);
    
    return (
            <button disabled={props.disabled} onClick={() => {setLoading(true)}} className={styles.button + ' ' + props.className}>
                <div className={styles.textButton}>
                    <SignIn className={styles.svgIcon} /><span>{props.isLoading || loading? props.loadingText || "Loading..." : props.label}</span> 
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
}

export default Button;