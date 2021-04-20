import React, { Component, Fragment } from "react";
import styles from '../styles/Home.module.css'

const AUTHOR = "killvung";

export default function Footer() {
    return (
        <div className={styles.footer}>
            {AUTHOR}
        </div>
    );
}
