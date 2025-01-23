import styles from "./Header.module.css";
import Menu from "./Menu.tsx";
import Logo from "../../components/Logo.tsx";

export default function Header() {
  const links = [
    { name: "See Pokémons", url: "/" },
    { name: "Create a Deck", url: "Create-A-Deck" },
    { name: "Contact", url: "Contact" },
    { name: "Mini-game (soon)", url: "Game" },
  ];

  return (
    <div className={styles.header}>
      <Logo />
      <Menu links={links} />
    </div>
  );
}
