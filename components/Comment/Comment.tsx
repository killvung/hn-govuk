import React from 'react';
import { buildLocaleDate } from '../../utils/dates'

import { CommentProps } from '../../models/props'
import CommentSummaryButton from './CommentSummaryButton';
import CommentContainer from './CommentContainer'

import styles from './Comment.module.css';

const Comment: React.FC<CommentProps> = ({ author, timestamp, comment, parentId, children }) => {
    return (
        <div>
            <details open className="govuk-details" data-module="govuk-details">
                <CommentSummaryButton />
                <div className={`govuk-details__text ${styles['Comment__comment-section-text']}`}>
                    <div>
                        <div><b>{author}</b><small className={styles['Comment__local-date']}>{buildLocaleDate(timestamp)}</small></div>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: comment }}></div>
                        {/* rECuRSioN */}
                        <ul className={styles['Comment__comment-section']}>
                            {children?.map((childId, id) => (
                                <li>
                                    <CommentContainer key={`${id}${parentId}`} commentId={childId} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default Comment;
