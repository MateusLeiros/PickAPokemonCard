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

    const menuClasses = [styles.menu, props.className];
    const linkClasses = [styles.links, props.linksClasses];
    
  return (
    <div className={menuClasses.join(" ")}>
        <div className={linkClasses.join(" ")}>
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
