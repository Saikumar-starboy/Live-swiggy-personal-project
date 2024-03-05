import { sum } from "../Sum";

test("sum function should calculates the sum of two numbers", () => {
    const result = sum(4 , 4);

    //assertion
    expect(result).toBe(8)
});