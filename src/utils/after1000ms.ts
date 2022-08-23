type AnyFunction = (...arg: any[]) => any;

const after1000ms = (callback?: AnyFunction) => {
  setTimeout(() => {
    callback && callback();
  }, 1000);
};

export default after1000ms;
