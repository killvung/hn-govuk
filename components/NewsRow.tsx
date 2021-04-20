import * as React from 'react';
import { GovUKLink, GovUKNextLink } from './GovUKLink';

interface NewsRowProps {
    /**
     * Title, points, author, timestamp, comments
     */
}

const constructSubHeader = (point: string, author: string, timestamp: string, href: string, comment: string) => (
    <div>
        {point} points by {author} {timestamp} ago | <GovUKNextLink href={href}>{`${comment} comment`}</GovUKNextLink>
    </div>
)
const NewsRow: React.FC<NewsRowProps> = () => {
    return (
        // href should be to article link
        // comment to nextlink to news comment
        <div>
            <GovUKLink href="/">News Row</GovUKLink>
            {constructSubHeader("420", "author", "timestamp", "/", "420")}
        </div>
    )
}

export default NewsRow;
