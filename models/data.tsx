// TODO: Finish interface

type Post = {
    id: number;
    by: string;
    time: number;
    type: string;
}

export interface Story extends Post {
    title: string;
    kids: [number] | undefined;
    score: number;
    url: string | undefined
}

export interface Comment extends Post {
    text: string;
}
