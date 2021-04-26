import React from 'react';
import renderer from 'react-test-renderer';
import CommentSummaryButton from '../CommentSummaryButton';

test('Comment - when toggle is true (on), comment section expanded, label changes to collasp', () => {
    const tree = renderer
        .create(<CommentSummaryButton toggle={true} />)
        .toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});

test('Comment - when toggle is false (off), comment section collasped, label changes to expand', () => {
    const tree = renderer
        .create(<CommentSummaryButton toggle={false} />)
        .toJSON();
        console.log(tree);
    expect(tree).toMatchSnapshot();

});