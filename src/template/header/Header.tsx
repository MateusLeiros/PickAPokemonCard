import styles from "./Header.module.css";
import Menu from "./Menu.tsx";
import Logo from "../../components/Logo.tsx";

export default function Header() {
  const links = [
    { name: "See Pokémons", url: "#" },
    { name: "Create a Deck", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Mini-game (soon)", url: "#" },
  ];

  return (
    <div className={styles.header}>
      <Logo />
      <Menu links={links} />
    </div>
  );
}
