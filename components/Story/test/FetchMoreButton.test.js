import React from 'react';
import renderer from 'react-test-renderer';
import FetchMoreButton from '../FetchMoreButton';

test('Render successfully', () => {
    const tree = renderer
        .create(
            <FetchMoreButton
                offset={0}
                perPage={0}
                totalLength={0}
                handleOnClick={0}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

test('Button enabled before reaches to the end', () => {
    const tree = renderer
        .create(<FetchMoreButton
            offset={0}
            perPage={10}
            totalLength={20}
            handleOnClick={0}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

test('Button disable when reaches to the end', () => {
    const tree = renderer
        .create(<FetchMoreButton
            offset={1}
            perPage={10}
            totalLength={10}
            handleOnClick={0}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})