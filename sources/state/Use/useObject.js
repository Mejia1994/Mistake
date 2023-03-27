const isEmpty = function (obj) {
    let empty = true;

    if (obj)
        empty = !(Object.getOwnPropertyNames(obj)?.length);

    return empty;
};

const stateHasChanged = function (obj) {
    let changed = false;

    for (let prop in obj) {
        if (!global.history.state?.hasOwnProperty(prop) || global.history?.state[prop] !== obj[prop]) {
            changed = true;
            break;
        }
    }

    return changed;
}

const useObject = function (object) {

    let {pathname} = global.location;

    if (stateHasChanged(object)) {
        let historyState = {...global.history.state, ...object};
        global.history.replaceState(historyState, "", pathname);
    }

    return {...global.history.state};
}

export default useObject;