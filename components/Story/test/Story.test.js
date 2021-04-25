import React from 'react';
import Story from '../Story';

import ShallowRenderer from 'react-test-renderer/shallow';

test('Story - Title, points, author, date, comment count existed', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Story />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
});
