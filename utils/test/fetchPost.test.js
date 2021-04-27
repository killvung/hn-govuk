import fetchPost from '../fetchPost';
import mockDataStory from './mockDataStory.json';

global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
});

test('fetchPost returns post successfully', async () => {
    fetch
        .mockReturnValueOnce(
            Promise.resolve({
                json: () => Promise.resolve(mockDataStory),
            })
        )
    const data = await fetchPost();
    expect(data).toEqual(mockDataStory);

})

test('fetchPost error handle', () => {
    // TODO
})