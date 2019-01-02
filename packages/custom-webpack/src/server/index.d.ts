/**
 * Created by Evgeny Barabanov on 28/06/2018.
 */
/// <reference types="node" />
import { BuilderContext } from '@angular-devkit/architect';
import { ServerBuilder } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import * as fs from 'fs';
import { BuildWebpackServerSchema } from '@angular-devkit/build-angular/src/server/schema';
export declare class CustomWebpackServerBuilder extends ServerBuilder {
    context: BuilderContext;
    constructor(context: BuilderContext);
    buildWebpackConfig(root: Path, projectRoot: Path, host: virtualFs.Host<fs.Stats>, options: BuildWebpackServerSchema): any;
}
export default CustomWebpackServerBuilder;
