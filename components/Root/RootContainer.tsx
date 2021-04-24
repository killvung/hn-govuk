import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import StoryRow from './StoryRow';
import FetchMoreButton from './FetchMoreButton';
import fetchPost from '../../utils/fetchPost';

export const fetchStoryIds = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
}

const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
export const fetchTopStoryIds = async () => {
    const response = await fetch(TOP_STORIES_URL);
    return await response.json();
}

const ASK_URL = "https://hacker-news.firebaseio.com/v0/askstories.json";
export const fetchAskStoryIds = async () => {
    const response = await fetch(ASK_URL);
    return await response.json();
}

const JOB_URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";
export const fetchJobStoryIds = async () => {
    const response = await fetch(JOB_URL);
    return await response.json();
}

interface RootPathPattern {
    '/': Function;
    '/ask': Function;
    '/job': Function;
    [key: string]: Function;
}
const fetchStoryIdsData: RootPathPattern = {
    '/': () => fetchTopStoryIds(),
    '/ask': () => fetchAskStoryIds(),
    '/job': () => fetchJobStoryIds()
}

const PER_PAGE: number = 25;
// Set offset to negative one to avoid fetching story in the beginning
const OFFSET: number = -1;
const RootContainer: React.FC = () => {
    const router = useRouter();
    const pathName = router.pathname
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
        fetchStoryIdsData[pathName]().then((topStoryIds: []) => {
            setTopStoryIds(topStoryIds);
            // Set the offset to 0 trigger fetchStories
            setOffset(0);
        })
    }, [pathName]);

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

export default RootContainer;
