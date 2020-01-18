import {sumArray} from "../index";
import {filterByTerm} from "../index";

describe("Test Suite", () => {
    test("basic", () => {
        expect(sumArray(...[1, 2, 3, 4, 5])).toBe(15);
    });

    test("Url filter.", () => {
       const input = [{
          id: 1,
          url: "https://www.url1.dev"
       }, {
           id: 2,
           url: "https://www.url1.dev"
       }, {
           id: 3,
           url: "https://www.link3.dev"
       }];

       const output = [{
           id: 3,
           url: "https://www.link3.dev"
       }];

      expect(filterByTerm(input, "link")).toEqual(output);
    });
});
