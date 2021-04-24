import React from 'react';

import { StoryProps } from '../../models/props';
import CommentContainer from '../Comment/CommentContainer';

const Story: React.FC<StoryProps> = ({ title, url, score, author, timestamp, descendants, rootId, kids }) => {
    return (
        <div>
            {/* Story */}
            <div>
                Story Placeholder
                {title} {url} {score} {author} {timestamp} {descendants} {rootId}
            </div>
            {/* Comment */}
            <div>
                {kids?.map((kidId, id) => (
                    <CommentContainer key={id} commentId={kidId} />
                ))}
            </div>
        </div>
    );
}

export default Story;
