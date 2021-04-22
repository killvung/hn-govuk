import { fetchTopStories } from '../NewsManager'
import mockDataTopStories from './mockDataTopStories.json';
import mockDataNews from './mockDataNews.json';

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
                json: () => Promise.resolve(mockDataNews),
            })
        )
    const data = await fetchTopStories();
    expect(data).toEqual([mockDataNews]);
});
