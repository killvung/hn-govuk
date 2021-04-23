import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Story from './Story';
import fetchPost from '../../utils/fetchPost';

const StoryContainer: React.FC = () => {
    const [story, setStory] = useState();
    const router = useRouter();

    useEffect(() => {
        const id = router.query.storyId as string;

        fetchPost(id).then((data: any) => {
            setStory(data);
        })
    });

    return (
        <Story {...story}>

        </Story>
    );
}

export default StoryContainer;
