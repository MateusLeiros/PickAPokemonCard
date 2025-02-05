import PokemonIcon from "../assets/pbIcon.svg?react";
import styles from "./LoadingPBIcon.module.css";

export default function LoadingPBIcon({ isLoading }: loadingProps) {
  return (
    <div className={isLoading ? styles.isLoading : styles.isHidden}>
      <PokemonIcon className={styles.loading}></PokemonIcon>
      <span> Loading...</span>
    </div>
  );
}

type loadingProps = {
  isLoading: boolean;
};
