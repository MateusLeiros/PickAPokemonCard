import React from "react";
import styles from './MenuContainer.module.css';

const MenuContainer = () => {
    return  <div className={styles.header}>
                <div>NFT Marketplace</div>
                <div>
                    <button>Marketplace</button>
                    <button>Rankings</button>
                    <button>Connect a wallet</button>
                    <button>Sign Up</button>
                </div>
            </div>;
}

export default MenuContainer;