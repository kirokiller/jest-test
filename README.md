注意 node 版本

匹配器
// 完整的匹配列表
https://jestjs.io/zh-Hans/docs/expect

<!-- 常用的匹配器
toBe
toEqual

判否 not

真值
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy

数字
toBeGreaterThan
toBeGreaterThanOrEqual
toBeLessThan
toBeLessThanOrEqual
toBeCloseTo

字符串
toMatch

数组和可迭代对象
toContain

异常
toThrow
 -->

测试异步代码

<!-- Promise

Asynv/Await 常配合 expect.assertions(number) 验证测试期间调用的断言数量

.resolves .rejects .catch

回调 done done() 不应与 Promise 混合，因为这会导致您测试中的内存泄漏。 -->

安装和移除

<!-- Repeating Setup

beforeEach afterEach beforeAll afeterAll

作用域

describe

test.only -->

模拟函数

使用 mock 函数

jest.fn().mock
.calls[][]
.resu[].value

模拟模块
mockResolvedValue
