import {stateManager} from "../index";

const updateStateFromElement = function (key, value) {
    let stateToUpdate = {};

    stateToUpdate[key] = (Number(value)) ? Number(value) : value;
    stateManager(stateToUpdate);
}

const initElement = function (stateKey, idElement) {
    let element = document.getElementById(idElement);

    element.addEventListener("change", function () {
        updateStateFromElement(stateKey, element.value);
    });

    if (stateManager(stateKey)) {
        element.value = stateManager(stateKey);
    } else {
        updateStateFromElement(stateKey, element.value);
    }

    return element;
}

const useBind = function ({stateKey, idElement, attachedEvent}) {

    let element = null
    if (idElement) {
        element = initElement(stateKey, idElement)
    }

    if (attachedEvent) {
        global.history.replaceState = new Proxy(global.history.replaceState, {
            apply: (target, thisArg, argArray) => {

                let [stateToBeUpdate] = argArray;
                let stateKeyOldValue = stateManager(stateKey);

                target.apply(thisArg, argArray);

                if (stateKeyOldValue !== stateToBeUpdate[stateKey]) {
                    if (element) {
                        element.value = stateToBeUpdate[stateKey];
                    }

                    attachedEvent(stateToBeUpdate[stateKey]);
                }
            }
        });
    }
}

export default useBind;
