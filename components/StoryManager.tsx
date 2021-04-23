import React, { useState, useEffect } from 'react';
import StoryRow from './StoryRow';
import PageControl from './PageControl';

const PER_PAGE: number = 25;
const OFFSET: number = -1;

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

export const fetchTopStoryIds = async () => {
    const response = await fetch(TOP_STORIES_URL);
    return await response.json();
}

const StoryManager: React.FC = () => {
    const [topStoryIds, setTopStoryIds] = useState([]);

    // Set it to negative one to trigger fetchStories not until offset has been set to 0
    // After fetching all top stories id
    const [offset, setOffset] = useState(OFFSET);
    const [stories, setStories] = useState([]);
    const [perPage] = useState(PER_PAGE);

    const fetchStories = async () => {
        const slice = topStoryIds.slice(offset * perPage, offset * perPage + perPage)
        return Promise.all(slice.map(storyId => (fetchStory(storyId))))
    }

    // Capture top story ids then save it to state
    useEffect(() => {
        fetchTopStoryIds().then(topStoryIds => {
            setTopStoryIds(topStoryIds);
            // Set the offset to 0 trigger fetchStories
            setOffset(0);
        })
    }, []);

    useEffect(() => {
        // TODO: Look for right type
        fetchStories().then((newStories: any) => {
            setStories(stories.concat(newStories));
        });
    }, [offset]);

    const handleOnClick = () => {
        setOffset(offset + 1);
    }

    return (
        <div>
            <ol>
                {stories.map(({ id, descendants, score, time, title, url, by }, index) => (
                    <li key={index}>
                        <StoryRow
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
            </ol>
            <PageControl offset={offset} perPage={perPage} totalLength={topStoryIds.length} handleOnClick={handleOnClick} />
        </div>
    )
}

export default StoryManager;
