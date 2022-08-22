/* json 说明 */
const json = {
  name: "jest-test",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test: "jest",
    lint: "eslint --fix",
  },
  author: "",
  license: "ISC",
  devDependencies: {
    "@testing-library/jest-dom": "^5.16.5", //
    "@types/jest": "^28.1.7",
    "@typescript-eslint/eslint-plugin": "^5.33.1", // eslint type
    "@typescript-eslint/parser": "^5.33.1", // eslint type
    eslint: "^8.22.0", // eslint
    "eslint-config-prettier": "^8.5.0", // eslitn prettier
    "eslint-plugin-jest": "^26.8.7", // eslint jest
    "eslint-plugin-prettier": "^4.2.1", // eslitn prettier
    "eslint-plugin-testing-library": "^5.6.0", // eslint RTL
    jest: "^28.1.3",
    "jest-environment-jsdom": "^28.1.3", // // As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
    prettier: "^2.7.1",
    "ts-jest": "^28.0.8", // 转译器
    typescript: "^4.7.4",
  },
};
