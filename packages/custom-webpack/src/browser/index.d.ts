/**
 * Created by Evgeny Barabanov on 28/06/2018.
 */
/// <reference types="node" />
import { BuilderContext } from '@angular-devkit/architect';
import { BrowserBuilder, NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { CustomWebpackSchema } from "../custom-webpack-schema";
import { Configuration } from "webpack";
export interface NormalizedCustomWebpackBrowserBuildSchema extends NormalizedBrowserBuilderSchema, CustomWebpackSchema {
}
export declare class CustomWebpackBrowserBuilder extends BrowserBuilder {
    constructor(context: BuilderContext);
    buildWebpackConfig(root: Path, projectRoot: Path, host: virtualFs.Host<fs.Stats>, options: NormalizedCustomWebpackBrowserBuildSchema): Configuration;
}
export default CustomWebpackBrowserBuilder;
