import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Story from './Story';
import fetchPost from '../../utils/fetchPost';

const StoryContainer: React.FC = () => {
    // TODO: Change type
    const [story, setStory] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        const storyId = router.query.storyId as string;
        if (storyId) {
            fetchPost(storyId).then((data: any) => {
                const { by, descendants, id, kids, score, time, title, url } = data;
                setStory({
                    title,
                    score,
                    author: by,
                    timestamp: time,
                    descendants,
                    url,
                    rootId: id,
                    kids
                });
            })
        }
    }, [router.query.storyId]);

    return (
        <Story {...story} />
    );
}

export default StoryContainer;
