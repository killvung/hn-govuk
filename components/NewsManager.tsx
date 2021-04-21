import React, { useReducer, useEffect } from 'react';
import NewsRow from '../components/NewsRow';

export const HACKER_NEWS_API_BASE_URL = "https://hacker-news.firebaseio.com/v0/";
export const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

export const constructStoryURL = (storyId: string) =>
    (`${HACKER_NEWS_API_BASE_URL}/item/${storyId}.json`)

export const fetchStory = async (storyId: string) => {
    const response = await fetch(constructStoryURL(storyId));
    const story = await response.json();
    return story;
}

export const fetchTopStories = async () => {
    const response = await fetch(TOP_STORIES_URL);
    const topStories: [] = await response.json();
    return Promise.all(topStories.map(storyId => fetchStory(storyId)));
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
                {/* rootId should be id of the news */}
                {stories.map(({ id, descendants, score, time, title, url, by }, index) => (
                    <li key={index}>
                        <NewsRow
                            author={by}
                            descendants={descendants}
                            score={score}
                            timestamp={time}
                            title={title}
                            url={url}
                            rootId={id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NewsManager;
