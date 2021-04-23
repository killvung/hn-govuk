import React from 'react';
import renderer from 'react-test-renderer';
import StoryRow from '../StoryRow';
import mockDataStory from './mockDataStory.json';

test('NewsRow - renders correctly', () => {
    const { descendants, score, time, title, url, id, by } = mockDataStory;
    const tree = renderer
        .create(
            <StoryRow
                author={by}
                descendants={descendants}
                score={score}
                timestamp={time}
                title={title}
                url={url}
                rootId={id}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
