import {IPostGroup} from ".";

/**
 * Represents a documentation version.
 */
export interface IVersion {
    /**
     * A unique identifier for the version.
     * e.g. '1.0.0'.
     */
    id: string;

    /**
     * The documentation version with a leading 'v' character.
     * e.g. 'v1.0.0'.
     */
    version: string;

    /**
     * A set of posts in the current documentation version.
     */
    groups: IPostGroup[];
}
