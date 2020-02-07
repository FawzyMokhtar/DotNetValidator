import * as _ from "lodash";
import {Versions} from "../data";
import {IVersion, IPost} from "../models";

/**
 * The documentation service.
 */
export class DocService {

    /**
     * Gets the documentation version with the given id.
     * @param id The unique identifier for the documentation version.
     */
    public static findVersion(id: string): IVersion {
        return Versions.find(version => version.id === id);
    }

    /**
     * Gets the post with the given postId in the specified documentation version.
     * @param versionId The unique identifier for the documentation version.
     * @param postId The unique identifier for the post.
     */
    public static findPost(versionId: string, postId: string): IPost {
        return this.getPosts(versionId).find(post => post.id === postId);
    }

    /**
     * Gets the previous and next posts relative to the given post in the specified documentation version.
     * @param versionId The unique identifier for the documentation version.
     * @param postId The unique identifier for the post.
     */
    public static GetPrevNextPosts(versionId: string, postId: string): {previous?: IPost, next?: IPost} {
        const result: {previous?: IPost, next?: IPost} = {};

        const posts = this.getPosts(versionId);
        const postIndex = posts.findIndex(post => post.id === postId);

        result.previous = posts[postIndex - 1];
        result.next = posts[postIndex + 1];

        return result;
    }

    /**
     * Gets the latest documentation version.
     */
    public static getLatestVersion(): IVersion {
        return Versions[Versions.length - 1];
    }


    /**
     * Gets all versions except the latest version.
     */
    public static getPastVersions(): IVersion[] {
        return Versions.filter(version => version.id !== this.getLatestVersion().id);
    }

    /**
     * Gets all posts in the specified documentation version.
     * @param versionId The unique identifier for the documentation version.
     */
    private static getPosts(versionId: string): IPost[] {
        return _.flatMap(
            this.findVersion(versionId)
                .groups,
            (group) => group.posts
        );
    }
}
