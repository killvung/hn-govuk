import React, { useState, useEffect } from 'react';

import fetchPost from '../../utils/fetchPost';
import { CommentContainerProps } from '../../models/props';
import Comment from './Comment';

const CommentContainer: React.FC<CommentContainerProps> = ({ commentId }) => {
    const [comment, setComment] = useState<any>();

    useEffect(() => {
        fetchPost(commentId).then(comment => {
            setComment(comment);
        })

    }, [commentId]);

    if (!comment) {
        return <span />
    }
    const { by, time, text, kids } = comment;
    return (
        <div>
            {/* Comments */}
            <div>
                <Comment
                    author={by}
                    timestamp={time}
                    comment={text}
                    children={kids}
                />
            </div>

        </div>
    );
}

export default CommentContainer;
