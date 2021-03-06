/// <reference types="node" />
import { BuilderConfiguration, BuilderContext, BuildEvent } from '@angular-devkit/architect';
import { BrowserBuilderSchema, DevServerBuilder, DevServerBuilderOptions, NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular';
import { Path, virtualFs } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { Stats } from 'fs';
import { Configuration } from "webpack";
export declare class GenericDevServerBuilder extends DevServerBuilder {
    private targetBuilder;
    constructor(context: BuilderContext);
    run(builderConfig: BuilderConfiguration<DevServerBuilderOptions>): Observable<BuildEvent>;
    buildWebpackConfig(root: Path, projectRoot: Path, host: virtualFs.Host<Stats>, browserOptions: BrowserBuilderSchema): Configuration;
    buildServerConfig: (devServerConfig: any) => (root: Path, projectRoot: Path, options: DevServerBuilderOptions, browserOptions: NormalizedBrowserBuilderSchema) => any;
}
export default GenericDevServerBuilder;
