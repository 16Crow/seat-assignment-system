// 防抖函数
export function debounce(func: Function, wait: number): Function {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// 节流函数
export function throttle(func: Function, wait: number): Function {
  let timeout: ReturnType<typeof setTimeout> | null;
  let lastArgs: any[];
  let lastThis: any;

  return function (this: any, ...args: any[]): void {
    const now = performance.now();
    const isImmediate = !timeout;

    lastArgs = args;
    lastThis = this;

    const later = () => {
      timeout = null;
      if (!isImmediate) {
        func.apply(lastThis, lastArgs);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (isImmediate) {
      func.apply(this, args);
    }
  };
}
