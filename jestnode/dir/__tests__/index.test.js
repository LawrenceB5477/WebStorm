"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var index_2 = require("../index");
describe("Test Suite", function () {
    test("basic", function () {
        expect(index_1.sumArray.apply(void 0, [1, 2, 3, 4, 5])).toBe(15);
    });
    test("Url filter.", function () {
        var input = [{
                id: 1,
                url: "https://www.url1.dev"
            }, {
                id: 2,
                url: "https://www.url1.dev"
            }, {
                id: 3,
                url: "https://www.link3.dev"
            }];
        var output = [{
                id: 3,
                url: "https://www.link3.dev"
            }];
        expect(index_2.filterByTerm(input, "link")).toEqual(output);
    });
});
