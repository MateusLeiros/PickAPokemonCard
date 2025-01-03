import React from "react";
import styles from "./Menu.module.css";
import Button from "../../components/Button.tsx";
import SignIn from "../../assets/signIn.svg?react";


export default function Menu() {

    const [loading, setLoading] = React.useState(false);

    function handleClick() {
        setLoading(true);
        console.log("Button clicked");
        setTimeout(() => {
            console.log("Button loading finished");
            setLoading(false);
        }, 2000);
    }
    
  return (
    <div className={styles.menu}>
        <div className={styles.links}>
            <a href='#'>See Pokémons</a>
            <a href='#'>Create a Deck</a>
            <a href='#'>Contact</a>
            <a href='#'>Mini-game (soon)</a>
        </div>
        <Button
        label={"Sign Up"}
        loadingText="Loading"
        onClick={handleClick}
        isLoading={loading}
        icon={<SignIn />}
      />
    </div>
  );
}