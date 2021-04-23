import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/TopBar.module.css'

const TITLE = "?";
const NAME = "HACKER NEWS";
const NAV_TOP = "TOP";
const NAV_ASK = "ASK";
const NAV_JOB = "JOB";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{TITLE}</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            </Head>
            <header className={`${'govuk-header'} ${styles.header}`} role="banner" data-module="govuk-header">
                <div className="govuk-header__container govuk-width-container">
                    <div className={`govuk-header__logo`}>
                        <a href="#" className="govuk-header__link govuk-header__link--homepage">
                            <span className="govuk-header__logotype">
                                <span className="govuk-header__logotype-text">
                                    {NAME}
                                </span>
                            </span>

                        </a>
                    </div>
                    <div className={`${styles['app-navigation-top']}`}>
                        <Link href="#">
                            <a className="govuk-header__link govuk-header__link--homepage">
                                <span className="govuk-header__logotype">
                                    <span>
                                        {NAV_TOP}
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${styles['app-navigation-top']}`}>
                        <Link href="#">
                            <a className="govuk-header__link govuk-header__link--homepage">
                                <span className="govuk-header__logotype">
                                    <span>
                                        {NAV_ASK}
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${styles['app-navigation-top']}`}>
                        <Link href="#">
                            <a className="govuk-header__link govuk-header__link--homepage">
                                <span className="govuk-header__logotype">
                                    <span>
                                        {NAV_JOB}
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <div>{children}</div>
        </>
    );
}
