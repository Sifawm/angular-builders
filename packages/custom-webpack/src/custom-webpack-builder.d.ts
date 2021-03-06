import { CustomWebpackBuilderConfig } from "./custom-webpack-builder-config";
import { Configuration } from "webpack";
import { Path } from '@angular-devkit/core';
export declare const defaultWebpackConfigPath = "webpack.config.js";
export declare class CustomWebpackBuilder {
    static buildWebpackConfig(root: Path, config: CustomWebpackBuilderConfig, baseWebpackConfig: Configuration, buildOptions: any): Configuration;
}
