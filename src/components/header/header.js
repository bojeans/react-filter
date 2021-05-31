import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (<>
        <header className={styles.header}>
            #no-filter meds store
            {props.children}
        </header>
    </>);
}

export default Header;
