/**
 * 防抖函数
 * @param callback {function} 需要防抖的回调函数
 * @param delay {number} 延迟时间
 * @param immediate {boolean} 是否立即执行
 * @returns
 */
function debounce(callback, delay, immediate) {
    if (delay === void 0) { delay = 500; }
    if (immediate === void 0) { immediate = false; }
    // 维护一个定时器, 保存上一次的定时器
    var timer = null;
    // 维护一把是否初次执行过的锁
    var locked = false;
    // 真正执行的函数
    var _debounce = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 取消上一次的定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 判断是否需要初次执行
        if (immediate && !locked) {
            callback.apply(this, args);
            // 初次执行锁上
            locked = true;
        }
        else {
            timer = setTimeout(function () {
                // 外部传入的真正要执行的函数
                callback.apply(_this, args);
                // 执行结束后打开
                locked = false;
            }, delay);
        }
    };
    // 取消防抖
    _debounce.cancal = function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = null;
        locked = false;
    };
    return _debounce;
}
