const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        "./sources/index.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "mistake.js"
    }
}
