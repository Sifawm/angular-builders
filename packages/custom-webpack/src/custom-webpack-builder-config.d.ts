import { MergeStrategy } from "webpack-merge";
export declare type MergeStrategies = {
    [field: string]: MergeStrategy;
};
export interface CustomWebpackBuilderConfig {
    path?: string;
    mergeStrategies?: MergeStrategies;
    replaceDuplicatePlugins?: boolean;
}
