import React from 'react';
import renderer from 'react-test-renderer';
import NewsRow from '../NewsRow';
import mockDataNews from './mockDataNews.json';

it('renders correctly', () => {
    const { descendants, score, time, title, url, id } = mockDataNews;
    const tree = renderer
        .create(<NewsRow
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
