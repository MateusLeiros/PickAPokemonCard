import styles from "./Footer.module.css";
import PokemonIcon from "../../assets/pbIcon.svg?react";

export default function Footer() {
  //   const links = [
  //     { name: "See Pokémons", url: "#" },
  //     { name: "Create a Deck", url: "#" },
  //     { name: "Contact", url: "#" },
  //     { name: "Mini-game (soon)", url: "#" },
  //   ];

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <PokemonIcon className={styles.pbIcon} />
        <span className={styles.logoText}>Pick a Pokemon Card</span>
      </div>
      <div className={styles.contact}>
        <span>Created by Mateus Leiros</span>
        <span>mateusleiros@gmail.com</span>
      </div>
    </div>
  );
}
