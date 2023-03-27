const useString = function (string) {
    let state = undefined;

    if (global.history.state?.hasOwnProperty(string)) {
        state = global.history.state[string];
    }

    return state;
}

export default useString;
