import styles from "./Header.module.css";
import Menu from "./Menu.tsx";
import PokemonIcon from "../../assets/pbIcon.svg?react";



export default function Header() {
    const links = [{name:'See Pokémons', url:'#'}, {name:'Create a Deck', url:'#'}, {name:'Contact', url:'#'}, {name:'Mini-game (soon)', url:'#'}];

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <PokemonIcon className={styles.pbIcon}/><span className={styles.logoText}>Pick a Pokemon Card</span>
            </div>
            <Menu links={links}/>
        </div>
    );
}