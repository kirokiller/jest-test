import React from "react";
import { render } from "@testing-library/react";
import Title from "components/Title";

describe("Title", () => {
  it("可以渲染大字", () => {
    const { baseElement } = render(<Title title="大字" type="large" />);
    expect(baseElement).toMatchSnapshot();
  });

  it("可以渲染小字", () => {
    const { baseElement } = render(<Title title="小字" type="small" />);
    expect(baseElement).toMatchSnapshot();
  });
});
/* 
  更新快照 npx jest --updateSnapshot
  tips:
    生成小快照。 只取重要的部分来生成快照，必须保证快照是能让你看懂的
    合理使用快照。 快照测试不是只为组件测试服务，同样组件测试也不一定要包含快照测试。快照能存放一切可序列化的内容。
  使用场景：
    组件 DOM 结构的对比
    在线上跑了很久的老项目
    大块数据结果的对比
*/
