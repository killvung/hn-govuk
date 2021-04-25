// import { Story } from "./data";

// TODO: Set data argument with Story once mapper has implemented
export const storyDataToStoryProps = (data: any) => {
    const { by, descendants, id, kids, score, time, title, url } = data;
    return {
        title,
        score,
        author: by,
        timestamp: time,
        descendants,
        url,
        rootId: id,
        kids
    };
}
