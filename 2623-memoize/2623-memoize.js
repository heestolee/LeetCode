/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(func) {
  const memo = {}; // 클로저가 적용되어서 내부함수가 기억하는 되는 변수

  return function () { // 내부함수
      const obj = JSON.stringify(arguments); //arguments 까지도 복제 후 사용
    if (!(Object.hasOwn(memo, obj))) {
      memo[obj] = func.apply(this, arguments);
    }
    return memo[obj];
  }
};


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */