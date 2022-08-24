import { config } from "utils/env";

describe("spyon", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it("开发环境", () => {
    jest.spyOn(config, "getEnv").mockReturnValue("dev");
    const { getEnv } = config;
    expect(getEnv()).toEqual("dev");
  });
  it("生产环境", () => {
    jest.spyOn(config, "getEnv").mockReturnValue("prod");
    const { getEnv } = config;
    expect(getEnv()).toEqual("prod");
  });
});
/* 
  By default, jest.spyOn also calls the spied method. This is different behavior from most other test libraries.
  If you want to overwrite the original function, you can use jest.spyOn(object, methodName).mockImplementation(() => customImplementation) 
  or object[methodName] = jest.fn(() => customImplementation);
*/
