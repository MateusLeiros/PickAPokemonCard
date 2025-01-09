import React from "react";
import styles from "./Menu.module.css";
import Button from "../../components/Button.tsx";
import SignIn from "../../assets/signIn.svg?react";

export default function Menu({ links }: MenuProps) {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
    console.log("Button clicked");
    setTimeout(() => {
      console.log("Button loading finished");
      setLoading(false);
    }, 2000);
  }

  const linksArray: Array<JSX.Element> = links.map((element) => (
    <a href={element.url}>{element.name}</a>
  ));

  return (
    <div className={styles.menu}>
      <div className={styles.links}>{linksArray}</div>
      <Button
        size={"medium"}
        label={"Sign Up"}
        loadingText="Loading"
        onClick={handleClick}
        isLoading={loading}
        icon={<SignIn />}
      />
    </div>
  );
}

type PageLink = {
  name: string;
  url: string;
};

type MenuProps = {
  links: Array<PageLink>;
};
