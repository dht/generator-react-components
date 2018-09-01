"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-react-cmp:cmp", () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, "../generators/cmp"))
            .withPrompts({ someAnswer: true });
    });

    it("creates files", () => {
        assert.file(["dummyfile.txt"]);
    });
});
