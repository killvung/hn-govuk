import React from 'react';

import { CommentProps } from '../../models/props'
import CommentContainer from './CommentContainer'

const Comment: React.FC<CommentProps> = ({ author, timestamp, comment, children }) => {
    return (
        <div>
            <h3>{author}</h3>
            {timestamp}
            {comment}
            {/* rECuRSioNNnnNnn */}
            <ul>
                {children?.map((childId, id) => (
                    <li><CommentContainer key={id} commentId={childId} /></li>
                ))}
            </ul>
        </div>
    );
}

export default Comment;
