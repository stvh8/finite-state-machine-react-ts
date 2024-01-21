import {
  describe,
  expect,
  test,
} from "vitest";

import { modThree } from "./Mod";

describe("Mod", () => {
  describe("modThree", () => {
    test("Should return 0 for input 1111", () => {
      const expectedResult = 0;
      expect(modThree("1111")).toEqual(expectedResult);
    });

    test("Should return 1 for input 1101", () => {
      const expectedResult = 1;
      expect(modThree("1101")).toEqual(expectedResult);
    });

    test("Should return 2 for input 1110", () => {
      const expectedResult = 2;
      expect(modThree("1110")).toEqual(expectedResult);
    });

    test("Should return 2 for input 111000", () => {
      const expectedResult = 2;
      expect(modThree("111000")).toEqual(expectedResult);
    });

    test("Should return 0 when invalid input", () => {
      const expectedResult = 0;
      expect(modThree("xxx")).toEqual(expectedResult);
    });
  });
});
