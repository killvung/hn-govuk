import * as React from 'react';
import Link from 'next/link'

interface LinkProps {
    href: string
    children: string
}

/**
 * Wrapper for creating link with GOVUK style
 */
const GovUKLink: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <a href={href} className="govuk-link govuk-link--no-visited-state">
            {children}
        </a>
    );
}

const GovUKNextLink: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className="govuk-link govuk-link--no-visited-state">
                {children}
            </a>
        </Link>
    );
}

export { GovUKLink, GovUKNextLink };
