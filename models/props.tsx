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

export interface CommentContainerProps {
    commentId: string
}

// Both story and comment shoud not be relied on StoryRowProps in the beginning
export interface CommentProps {
    author: string
    timestamp: string
    comment: string
    children: []
}
