import React from "react";
import styles from "./Menu.module.css";
import Button from "./Button.tsx";
import SignIn from "../assets/signIn.svg?react";


export default function Menu(props: menuProps) {

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
    <div className={styles.menu + ' ' + props.className}>
        <div className={styles.links + ' ' + props.linksClasses}>
            <a>Home</a>
            <a>Marketing</a>
            <a>Membership</a>
            <a>Contact</a>
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
type menuProps = {
  className?: string,
  linksClasses?: string,
};
