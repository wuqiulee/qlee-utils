/**
 * 防抖函数
 * @param callback {function} 需要防抖的回调函数
 * @param delay {number} 延迟时间
 * @returns
 */
export function debounce(callback: () => {}, delay: number = 500) {
  // 维护一个定时器, 保存上一次的定时器
  let timer: ReturnType<typeof setTimeout> | null = null;

  // 真正执行的函数
  const _debounce = function () {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      callback();
    }, delay);
  };

  return _debounce;
}
