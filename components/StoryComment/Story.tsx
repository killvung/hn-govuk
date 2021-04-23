import React from 'react';
import { StoryProps } from '../../models/props';

const Story: React.FC<StoryProps> = ({ title, url, score, author, timestamp, descendants, rootId, kids }) => (
    <div>
        Story Placeholder
        {title} {url} {score} {author} {timestamp} {descendants} {rootId}
    </div>
);

export default Story;
