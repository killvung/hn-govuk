type Post = {
    by: string;
    descendants: number;
    id: number;
    kids: [number];
    time: number;
    score: number;
    title: string;
    type: string;
    url: string;
}

const HACKER_NEWS_API_BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const constructPostURL = (postId: number) =>
    (`${HACKER_NEWS_API_BASE_URL}/item/${postId}.json`)

export const fetchPost = async (postId: number): Promise<Post> => {
    const response = await fetch(constructPostURL(postId));
    return await response.json();
}

export default fetchPost;
