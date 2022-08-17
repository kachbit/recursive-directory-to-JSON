const testFolder = 'C:/Users/K/Desktop';

function readDir(dir, data) {
    let fs = require("fs");
    data ? data : data = {};
    var files = fs.readdirSync(dir, { withFileTypes: true });
    files.forEach(file => {
        let path = dir + "/" + file.name;
        if (file.isDirectory()) {
            readDir(path, (data[file.name] = {}));
        } else if (file.isFile()) {
            data[file.name] = path;
        }
    });
    return data;
}

console.log(readDir(testFolder));
