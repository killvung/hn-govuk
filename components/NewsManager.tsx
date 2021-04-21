import React, { useReducer, useEffect } from 'react';
import NewsRow from '../components/NewsRow';
import mockDataNews from '../components/tests/mockDataNews.json';

const fetchTopStories = async () => {
    // TODO: Use fetch to fetch top stories once wire is connected
    const mockData = await [mockDataNews, mockDataNews, mockDataNews, mockDataNews, mockDataNews];
    return mockData;
}

const initialState = { stories: [] }

// TODO: Look at the right type for state and action 
function reducer(state: any, action: any) {
    switch (action.type) {
        case 'TOP_STORIES_SUCCESS':
            return { ...state, stories: action.payload };
        default:
            throw new Error();
    }
}

const NewsManager: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetchTopStories().then(data => {
            dispatch({ type: 'TOP_STORIES_SUCCESS', payload: data });
        })
    }, [])

    const stories: [] = state.stories;

    return (
        <div>
            <ul>
                {stories.map(({ descendants, score, time, title, url, by }, id) => (
                    <li key={id}>
                        <NewsRow
                            author={by}
                            descendants={descendants}
                            score={score}
                            timestamp={time}
                            title={title}
                            url={url}
                            rootId={descendants}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NewsManager;
