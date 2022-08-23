import sleep from "utils/sleep";

describe("sleep", () => {
  it("1", async () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const act = async (callback: () => void) => {
      await sleep(1000);
      callback && callback();
    };
    // 执行act setTimeout入Message Queue
    const promise = act(callback);
    expect(callback).not.toHaveBeenCalled();
    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers();
    // 执行 callback 内容
    await promise;
    expect(callback).toBeCalledTimes(1);
    expect(callback).toHaveBeenCalled();
  });
});
