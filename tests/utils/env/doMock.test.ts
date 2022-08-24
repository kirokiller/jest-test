describe("doMock", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("测试环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => {
          return "dev";
        },
      },
    }));
    // 在doMock之后使用require引入
    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("dev");
  });

  it("生产环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => {
          return "prod";
        },
      },
    }));
    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("prod");
  });
});
