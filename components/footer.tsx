import React from "react";
import styles from '../styles/Home.module.css'

const AUTHOR = "killvung";

const Footer: React.FC = () => (
    <div>
        <footer className="govuk-footer " role="contentinfo">
            <div className="govuk-width-container ">
                <div className="govuk-footer__meta">
                    <div className="govuk-footer__meta-item">
                        <a className="govuk-footer__link" href="https://design-system.service.gov.uk/" rel="license">GOV.UK Design System</a>
                        <br />
                        {AUTHOR} <a className="govuk-footer__link" href="https://www.gnu.org/licenses/copyleft.en.html/">(ɔ) 2021</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)

export default Footer;
