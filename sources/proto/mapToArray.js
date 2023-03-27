const mapToArray = function () {
    return [...this].map(([key, value]) => ({...value, key}))
};

export default mapToArray;