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
    const constructTitle = () => {
        if (title.includes("Ask HN:")) {
            return <h2><GovUKNextLink href={`/comment/${rootId}`}>{title}</GovUKNextLink></h2>
        }
        return <h2><GovUKLink href={url}>{title}</GovUKLink></h2>
    };

    const constructSubHeader = () => {
        const constructComment = () => {
            if (!descendants) {
                return <span></span>
            } return <span> | <GovUKNextLink href={`/comment/${rootId}`}>{`${descendants} comment`}</GovUKNextLink></span>
        }
        const constructDate = () => {
            const date = new Date(timestamp * 1000).toLocaleString('en-GB');
            return <span>{date}</span>
        }
        return (
            <div>
                {score} points by {author} at {constructDate()} {constructComment()}
            </div >
        )
    }


    return (
        <div>
            {constructTitle()}
            {constructSubHeader()}
        </div>
    )
}

export default NewsRow;
