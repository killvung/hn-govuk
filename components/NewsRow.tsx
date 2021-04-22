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


const NewsRow: React.FC<NewsRowProps> = ({ title, url, score, author, timestamp, descendants, rootId }) => {
    const constructSubHeader = () => (
        <div>
            {/* TODO: Construct href and convert timestamp */}
            {score} points by {author} at {timestamp} | <GovUKNextLink href={`/comment/${rootId}`}>{`${descendants} comment`}</GovUKNextLink>
        </div >
    )
    const constructTitle = () => {
        if (title.includes("Ask HN:")) {
            return <h2><GovUKNextLink href={`/comment/${rootId}`}>{title}</GovUKNextLink></h2>
        }
        return <h2><GovUKLink href={url}>{title}</GovUKLink></h2>
    };

    return (
        <div>
            {constructTitle()}
            {constructSubHeader()}
        </div>
    )
}

export default NewsRow;
