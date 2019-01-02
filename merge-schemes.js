"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const wd = process.cwd();
const schemesToMerge = require(`${wd}/src/schemes`);
for (const customSchema of schemesToMerge) {
    const originalSchema = require(customSchema.originalSchemaPath);
    const schemaExtensions = customSchema.schemaExtensionPaths.map((path) => require(path));
    const newSchema = schemaExtensions.reduce((extendedSchema, currentExtension) => lodash_1.merge(extendedSchema, currentExtension), originalSchema);
    fs_1.writeFileSync(customSchema.newSchemaPath, JSON.stringify(newSchema, null, 2), 'utf-8');
}
//# sourceMappingURL=merge-schemes.js.map