import { fetchTopStories } from '../StoryManager'
import mockDataTopStories from './mockDataTopStories.json';
import mockDataStory from './mockDataStory.json';

global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
});

test('fetch data successfully', async () => {
    fetch
        .mockReturnValueOnce(
            Promise.resolve({
                json: () => Promise.resolve(mockDataTopStories),
            })
        )
        .mockReturnValueOnce(
            Promise.resolve({
                json: () => Promise.resolve(mockDataStory),
            })
        )
    const data = await fetchTopStories();
    expect(data).toEqual([mockDataStory]);
});
