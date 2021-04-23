// TODO: Differentiate between Story and Comment for Post
type Post = {
    id: number;
}

interface Story extends Post {
    title: string;
}
interface Comment extends Post {
    text: string;
}

const HACKER_NEWS_API_BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const constructPostURL = (postId: number) =>
    (`${HACKER_NEWS_API_BASE_URL}/item/${postId}.json`)

export const fetchPost = async (postId: number): Promise<Story | Comment> => {
    const response = await fetch(constructPostURL(postId));
    return await response.json();
}

export default fetchPost;
