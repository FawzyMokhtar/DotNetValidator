export interface INugetPackage {
    data: {
        id: string;
        version: string;
        description: string;
        summary: string;
        title: string;
        licenseUrl: string;
        tags: string[];
        authors: string[];
        totalDownloads: number;
        verified: boolean;
        versions: {
            version: string,
            downloads: number,
            "@id": string;
        }[];
    }[];
}
