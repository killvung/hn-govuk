import * as React from 'react';
import { GovUKLink, GovUKNextLink } from './GovUKLink';

interface NewsRowProps {
    title: string
    score: number
    author: string
    timestamp: number
    descendants: number
    url: string
    rootId: string
}

const constructSubHeader = (
    score: number,
    author: string,
    timestamp: number,
    descendants: number,
    rootId: string
) => (
    <div>
        {/* TODO: Construct href and convert timestamp */}
        {score} points by {author} at {timestamp} | <GovUKNextLink href={`/${rootId}`}>{`${descendants} comment`}</GovUKNextLink>
    </div>
)
const NewsRow: React.FC<NewsRowProps> = ({ title, url, score, author, timestamp, descendants, rootId }) => {
    return (
        <div>
            <GovUKLink href={url}>{title}</GovUKLink>
            {constructSubHeader(score, author, timestamp, descendants, rootId)}
        </div>
    )
}

export default NewsRow;
