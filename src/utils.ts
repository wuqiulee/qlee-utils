/**
 * 防抖函数
 * @param callback {function} 需要防抖的回调函数
 * @param delay {number} 延迟时间
 * @param immediate {boolean} 是否立即执行
 * @returns
 */
function debounce(callback: Function, delay: number = 500, immediate: boolean = false) {
  // 维护一个定时器, 保存上一次的定时器
  let timer: ReturnType<typeof setTimeout> | null = null;
  // 维护一把是否初次执行过的锁
  let locked = false;

  // 真正执行的函数
  const _debounce = function (...args: any[]) {
    // 取消上一次的定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 判断是否需要初次执行
    if (immediate && !locked) {
      callback.apply(this, args);
      // 初次执行锁上
      locked = true;
    } else {
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        callback.apply(this, args);
        // 执行结束后打开
        locked = false;
      }, delay);
    }
  };

  return _debounce;
}
