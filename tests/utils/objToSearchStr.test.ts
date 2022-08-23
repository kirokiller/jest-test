import objToSearchStr from "utils/objToSearchStr";

describe("objToSearchStr", () => {
  it("转SearchStr", () => {
    expect(
      objToSearchStr({
        a: 1,
        b: 2,
      })
    ).toEqual("a=1&b=2");
  });
});
