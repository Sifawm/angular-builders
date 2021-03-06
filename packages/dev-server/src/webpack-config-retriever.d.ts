/// <reference types="node" />
import { Path, virtualFs } from '@angular-devkit/core';
import { Builder } from '@angular-devkit/architect';
import { BrowserBuilderSchema } from '@angular-devkit/build-angular';
import { Stats } from 'fs';
import { Configuration } from "webpack";
export declare class WebpackConfigRetriever {
    static getTargetBuilderWebpackConfig(targetBuilder: Builder<BrowserBuilderSchema> | undefined, root: Path, projectRoot: Path, host: virtualFs.Host<Stats>, browserOptions: any): Configuration | undefined;
}
