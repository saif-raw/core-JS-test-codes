const rotateString = (str, n, direction) => {
    if (str && n && direction) {
        switch (direction) {
            case "left": {
                return str.substr(n, str.length - n) + str.substr(0, n);
            }
            case "right": {
                return (
                    str.substr(str.length - n, str.length - 1) +
                    str.substr(0, str.length - n)
                );
            }
            default:
                if (direction !== "left" || direction !== "right") {
                    throw "Invalid Direction";
                }
        }
    } else {
        throw "Invalid Input";
    }
};

// console.log(rotateString("1 2 3 4 5 6 7 8 9 0 ", 3, "left"));
// rotateString(" A B C D E F G H ", 2, "left");
// rotateString("1 2 3 4 5 6 7 8 9 0 ", 3, "right");

module.exports = rotateString;
