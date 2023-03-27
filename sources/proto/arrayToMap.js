const arrayToMap = function () {
    let arrayMap = [...this];

    return arrayMap.reduce(function (ac, cu, index) {
        if (cu) {
            let key = btoa((index).toString());
            ac.set(key, {...cu, key});
        }

        return ac;
    }, new Map());
}

export default arrayToMap;