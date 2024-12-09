'use strict';

const compose = (...funcs) => {
    const errorHandlers = [];

    const result = (x) => {
        if (funcs.length === 0) return x;

        const last = funcs.length - 1;
        let acc = x;

        try {
            for (let i = last; i >= 0; i--) {
                acc = funcs[i](acc);
            }
            return acc;
        }
        catch (error) {
            for (const errorHandler of errorHandlers) {
                errorHandler(error);
            }
            return;
        }
    };

    result.on = (name, handler) => {
        if (name === 'error') errorHandlers.push(handler);
    };

    return result;
};


module.exports = { compose };
