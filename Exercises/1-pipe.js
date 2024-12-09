'use strict';

const pipe = (...funcs) => {
    for (const func of funcs) {
        if (typeof func !== 'function') {
            throw new Error(`Composition argument ${func} is not a function`);
        }
    }

    return (x) => funcs.reduce((acc, func) => func(acc), x);
}

module.exports = { pipe };
