import * as React from 'react';
import { GovUKLink, GovUKNextLink } from './GovUKLink';

interface NewsRowProps {
    /**
     * Title, points, author, timestamp, comments
     */
    title: string
    score: number
    author: string
    timestamp: number
    descendants: number
    rootId: string
    href: string
}

const constructSubHeader = (score: number, author: string, timestamp: number, descendants: number, rootId: string) => (
    <div>
        {/* TODO: Construct href and convert timestamp */}
        {score} points by {author} at {timestamp} | <GovUKNextLink href={`/${rootId}`}>{`${descendants} comment`}</GovUKNextLink>
    </div>
)
const NewsRow: React.FC<NewsRowProps> = ({ title, score, author, timestamp, descendants, rootId, url }) => {
    return (
        // href should be to article link
        // comment to nextlink to news comment
        <div>
            <GovUKLink href={url}>{title}</GovUKLink>
            {constructSubHeader(score, author, timestamp, descendants, rootId)}
        </div>
    )
}

export default NewsRow;
