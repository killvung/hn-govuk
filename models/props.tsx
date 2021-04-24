export interface StoryRowProps {
    title: string
    score: number
    author: string
    timestamp: number
    descendants: number
    url: string
    rootId: string;
}

export interface StoryProps extends StoryRowProps {
    kids: [] | undefined
}
