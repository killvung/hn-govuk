import React from "react";

const AUTHOR = "killvung";

const Footer: React.FC = () => (
    <footer className="govuk-footer " role="contentinfo">
        <div className="govuk-width-container ">
            <div className="govuk-footer__meta">
                <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                    I don't know whether UK Open Government Loicence is applied in US, please let me know.
                    <br />
                    <a className="govuk-footer__link" href="https://github.com/killvung/hn-govuk" rel="license">Source code</a>
                </div>
                <div className="govuk-footer__meta-item">
                    By: {AUTHOR}
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
