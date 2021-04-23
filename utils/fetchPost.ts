import { Story, Comment } from '../models/data';

const HACKER_NEWS_API_BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const constructPostURL = (postId: string) =>
    (`${HACKER_NEWS_API_BASE_URL}/item/${postId}.json`)

export const fetchPost = async (postId: string): Promise<Story | Comment> => {
    const response = await fetch(constructPostURL(postId));
    return await response.json();
}

export default fetchPost;
