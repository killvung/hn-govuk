import * as React from 'react';
import Link from 'next/link'

interface NewsRowProps {

}

/**
 * Title, points, author, timestamp, comments
 */
const NewsRow: React.FC<NewsRowProps> = () => {
    return (
        // href should be to article link
        // comment to nextlink to news comment
        <div>
            <a className="govuk-link govuk-link--no-visited-state" href="/">
                News Row
            </a>
            <div>
                "point" points by "author" "timestamp" ago | <Link href="/"><a className="govuk-link govuk-link--no-visited-state">"comment" comments</a></Link>
            </div>
        </div>
    )
}

export default NewsRow;
