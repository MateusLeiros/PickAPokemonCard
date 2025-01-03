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
    // let listOfLinks = '';
    // const pagesTotal = props.pageNames.length;
    // let linksElement: React.ReactElement | undefined = undefined;
    // props.pageNames.forEach(() => {
    //   linksElement = linksElement.concat('<a href={props.pageLinks}>{props.pageNames}</a>');
    // });
    // '<a href={props.pageLinks}>{props.pageNames}</a>'
    
    // if (props.pageNames !== undefined) {
    //   for (page in props.pageNames){
    //     listOfLinks = listOfLinks.concat('abc');
    //   }
    //   console.log(listOfLinks);
    //   linksElement = listOfLinks;
    // }
    // else {
    //   linksElement = <div><a>Home</a>
    //   <a>Marketing</a>
    //   <a>Membership</a>
    //   <a>Contact</a></div>
    // }
    
    
    
  return (
    <div className={menuClasses.join(" ")}>
        <div className={linkClasses.join(" ")}>
          {/*linksElement*/}
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
  pageNames: Array<string>,
  pageLinks: Array<string>,
};
