import {IPostSectionItem} from ".";

/**
 * Represents a post for a documentation version.
 */
export interface IPost {
    /**
     * A unique identifier for the post.
     */
    id: string;

    /**
     * The title of the post.
     */
    title: string;

    /**
     * Indicates whether is the title property is a code or not.
     */
    isCode?: boolean;

    /**
     * The full route of the post.
     */
    route: string;

    /**
     * A set of sections in the current post.
     */
    sections?: IPostSectionItem[];
}
