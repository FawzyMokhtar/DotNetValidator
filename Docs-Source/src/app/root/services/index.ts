import {GlobalService} from "./global.service";
import {LibService} from "./lib.service";

export * from "./global.service";
export * from "./lib.service";

export const SERVICES: any[] = [
    GlobalService,
    LibService
];
