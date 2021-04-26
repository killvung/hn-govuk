import React, { useState, useEffect } from 'react';

import fetchPost from '../../utils/fetchPost';
import { CommentContainerProps } from '../../models/props';
import Comment from './Comment';

import styles from './Comment.module.css';

const CommentContainer: React.FC<CommentContainerProps> = ({ commentId }) => {
    const [comment, setComment] = useState<any>();

    useEffect(() => {
        fetchPost(commentId).then(comment => {
            setComment(comment);
        });
    }, [commentId]);

    if (!comment) {
        return <span />
    }

    const { by, time, text, kids, parent } = comment;
    return (
        <ul className={styles['Comment__comment-section']}>
            <li>
                <Comment
                    parentId={parent}
                    author={by}
                    timestamp={time}
                    comment={text}
                    children={kids}
                />
            </li>
        </ul>
    );
}

export default CommentContainer;
