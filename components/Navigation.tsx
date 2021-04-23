import React from 'react';
import styles from '../styles/Navigation.module.css';
import { GovUKNextLink } from '../components/GovUKLink';

const NAV_TOP = "TOP";
const NAV_ASK = "ASK";
const NAV_JOB = "JOB";

const Navigation: React.FC = ({ children }) => {
    return (
        <div>
            <nav className={`${styles['app-navigation']} govuk-clearfix`}>
                <ul className={`${styles['app-navigation__list']} ${styles['app-width-container']}`}>
                    <li className={styles['app-navigation__list-item']}>
                        <GovUKNextLink href="#">{NAV_TOP}</GovUKNextLink>
                    </li>
                    <li className={styles['app-navigation__list-item']}>
                        <GovUKNextLink href="#">{NAV_JOB}</GovUKNextLink>
                    </li>
                    <li className={styles['app-navigation__list-item']}>
                        <GovUKNextLink href="#">{NAV_ASK}</GovUKNextLink>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default Navigation;
