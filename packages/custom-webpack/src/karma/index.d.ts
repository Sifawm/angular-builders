/**
 * Created by Evgeny Barabanov on 05/10/2018.
 */
/// <reference types="node" />
import { BuilderContext } from '@angular-devkit/architect';
import { KarmaBuilder, NormalizedKarmaBuilderSchema } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { Configuration } from 'webpack';
import { CustomWebpackSchema } from '../custom-webpack-schema';
export interface NormalizedCustomWebpackKarmaBuildSchema extends NormalizedKarmaBuilderSchema, CustomWebpackSchema {
}
export declare class CustomWebpackKarmaBuilder extends KarmaBuilder {
    constructor(context: BuilderContext);
    buildWebpackConfig(root: Path, projectRoot: Path, sourceRoot: Path, host: virtualFs.Host<fs.Stats>, options: NormalizedCustomWebpackKarmaBuildSchema): Configuration;
}
export default CustomWebpackKarmaBuilder;
