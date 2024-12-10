import React from "react";
import styles from './MenuContainer.module.css';

const MenuContainer = () => {
    return  <div className={styles.header}>
                <button>NFT Marketplace</button>
                <button>Marketplace</button>
                <button>Rankings</button>
                <button>Connect a wallet</button>
                <button>Sign Up</button>
            </div>;
}

export default MenuContainer;