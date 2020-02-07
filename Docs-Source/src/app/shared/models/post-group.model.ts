import {IPost} from ".";

/**
 * Represents a posts group in a documentation version.
 */
export interface IPostGroup {
    /**
     * The title of posts group.
     */
    title: string;

    /**
     * A set of posts in the current posts group.
     */
    posts: IPost[];
}
