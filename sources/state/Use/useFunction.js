const useFunction = function (functionName) {

    global.history.replaceState = new Proxy(global.history.replaceState, {
        apply: (target, thisArg, argArray) => {
            let [stateUpdated] = argArray;
            let oldState = {...global.history.state};

            target.apply(thisArg, argArray);
            functionName.call(null, stateUpdated, oldState);
        }
    });

    functionName.call(null, {...global.history.state});
}

export default useFunction;