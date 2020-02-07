/**
 * Represents a section in a documentation post.
 */
export interface IPostSectionItem {
    /**
     * A unique identifier for the section.
     *
     * e.g. the section id for the <h3 id="section1"></h3> is 'section1'.
     */
    id: string;

    /**
     * The title of the section.
     */
    title: string;

    /**
     * Indicates whether is the title property is a code or not.
     */
    isCode?: boolean;
}
