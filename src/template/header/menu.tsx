import React from "react";
import styles from "./Menu.module.css";
import Button from "../../components/Button.tsx";
import SignIn from "../../assets/signIn.svg?react";


export default function Menu({links}:menuProps) {

    const [loading, setLoading] = React.useState(false);

    function handleClick() {
        setLoading(true);
        console.log("Button clicked");
        setTimeout(() => {
            console.log("Button loading finished");
            setLoading(false);
        }, 2000);
    }

    let linksArray=[];
    if (links !== undefined) {linksArray = links.map((element) => <a href={element.url}>{element.name}</a>);};
    
  return (
    <div className={styles.menu}>
        <div className={styles.links}>
          {linksArray}
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

type pageLink = {
  name: string,
  url: string,
}
  
type menuProps = {
  links: Array<pageLink>,
}