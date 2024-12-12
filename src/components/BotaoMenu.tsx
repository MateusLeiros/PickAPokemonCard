import React from 'react';
import styles from './BotaoMenu.module.css';

const BotaoMenu = (props) => {
    return (
        <button className={styles.botao}>
            {props.nomeBotao}
        </button>
    )
}
export default BotaoMenu;