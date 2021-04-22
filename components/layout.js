import Head from 'next/head'
const TITLE = "?";
const NAME = "?";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{TITLE}</title>
            </Head>
            <header className={'govuk-header'} role="banner" data-module="govuk-header">
                <div className="govuk-header__container govuk-width-container">
                    <div className="govuk-header__logo">
                        <a href="#" className="govuk-header__link govuk-header__link--homepage">
                            <span className="govuk-header__logotype">
                                <span className="govuk-header__logotype-text">
                                    {NAME}
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            <div>{children}</div>
        </>
    );
}
