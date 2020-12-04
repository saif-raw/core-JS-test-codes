/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/


const addition = (...numbers) => {
    if (numbers.length === 0 || numbers.some(isNaN) || numbers.length === -1) {
        throw new Error("Invalid Input");
    } else {
        return numbers.reduce((a, b) => {
            return a + b;
        });
    }
};


module.exports = addition;