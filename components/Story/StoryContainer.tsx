import React, { useState, useEffect } from 'react';

import StoryRow from './StoryRow';
import FetchMoreButton from './FetchMoreButton';
import fetchPost from '../../utils/fetchPost';

const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
export const fetchTopStoryIds = async () => {
    const response = await fetch(TOP_STORIES_URL);
    return await response.json();
}

const PER_PAGE: number = 25;
// Set offset to negative one to avoid fetching story in the beginning 
const OFFSET: number = -1;
const StoryContainer: React.FC = () => {
    const [topStoryIds, setTopStoryIds] = useState([]);

    const [offset, setOffset] = useState(OFFSET);
    const [perPage] = useState(PER_PAGE);
    const [stories, setStories] = useState([]);

    const fetchStories = async (): Promise<any> => {
        const slice = topStoryIds.slice(offset * perPage, offset * perPage + perPage)
        return Promise.all(slice.map(async (storyId) => fetchPost(storyId)));
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
        fetchStories().then((incomingStories: []) => {
            setStories([
                ...stories,
                ...incomingStories
            ]);
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
            <FetchMoreButton offset={offset} perPage={perPage} totalLength={topStoryIds.length} handleOnClick={handleOnClick} />
        </div>
    )
}

export default StoryContainer;
