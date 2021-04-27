import React from 'react';

import { StoryProps } from '../../models/props';
import CommentContainer from '../Comment/CommentContainer';

import { buildLocaleDate } from '../../utils/dates';

const URL_TEXT_LENGTH_LIMIT = 75;
// Refactor this to util if more than one component is using it
const buildUrlText = (href: string) => {
    return href.length > URL_TEXT_LENGTH_LIMIT ? href.slice(0, URL_TEXT_LENGTH_LIMIT) + "..." : href;
}

const Story: React.FC<StoryProps> = ({ title, url, score, author, timestamp, descendants, kids }) => {
    return (
        <div>
            <h2>{title}</h2>
            {url && <a href={url}>{buildUrlText(url)}</a>}
            <p>{`${score} points | ${author} | ${buildLocaleDate(timestamp)}`}</p>
            <hr />
            <div>
                {`${descendants} comments`}
            </div>
            <div>
                {kids?.map((kidId, id) => (
                    <CommentContainer key={id} commentId={kidId} />
                ))}
            </div>
        </div>
    );
}

export default Story;
