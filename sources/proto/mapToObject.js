const mapToObject = function toObject() {
    let object = {};

    this.forEach(function (value, key) {
        if (value) {
            object[key] = value
        }
    });

    return object;
}

export default mapToObject;