"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("./app.po");
describe('workspace-project App', () => {
    let page;
    beforeEach(() => {
        page = new app_po_1.AppPage();
    });
    it('should display generated Hello World div', () => {
        page.navigateTo();
        expect(page.getDivText()).toEqual('Hello world');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map