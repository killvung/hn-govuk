import * as React from 'react';
import { GovUKLink, GovUKNextLink } from '../GovUKLink';
import { StoryRowProps } from '../../models/props';
import { buildLocaleDate } from '../../utils/dates';

const StoryRow: React.FC<StoryRowProps> = ({ title, url, score, author, timestamp, descendants, rootId }) => {
    const constructTitle = () => {
        if (!url) {
            return <h2><GovUKNextLink href={`/${rootId}`}>{title}</GovUKNextLink></h2>
        }
        return <h2><GovUKLink href={url}>{title}</GovUKLink></h2>
    };

    const constructSubHeader = () => {
        const constructCommentLink = () => {
            if (!descendants) {
                return <span></span>
            } return <span> | <GovUKNextLink href={`/${rootId}`}>{`${descendants} comment`}</GovUKNextLink></span>
        }

        return (
            <div>
                {score} points by {author} at {<span>{buildLocaleDate(timestamp)}</span>}
                {constructCommentLink()}
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

export default StoryRow;
