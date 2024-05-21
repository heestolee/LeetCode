/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initValue = init;
    
    const increment = function () {
        init++;
        return init;
    }
    
    const decrement = function () {
        init--;
        return init;
    }
    
    const reset = function () {
        init = initValue;
        return initValue;
    }
    
    
        return {
        increment,
        decrement,
            reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */