// TODO: Differentiate between Story and Comment for Post
type Post = {
    id: number;
}

export interface Story extends Post {
    title: string;
}

export interface Comment extends Post {
    text: string;
}
