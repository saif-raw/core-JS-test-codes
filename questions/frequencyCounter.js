/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
  if (
      str === "" ||
      str === null ||
      str === undefined ||
      typeof str === "number"
  ) {
      throw new Error("Invalid Input");
  } else {
      let splitString = str.split("").sort();
      let obj = {
          a: 0,
          e: 0,
          i: 0,
          o: 0,
          u: 0,
      };
      let vowels = "aeiou";
      splitString.forEach((letter) => {
          if (vowels.indexOf(letter.toLowerCase()) !== -1) {
              if (letter in obj) {
                  obj[letter]++;
              } else {
                  obj[letter] = 1;
              }
          }
      });
      return obj;
  }
};

// console.log(frequencyCounter("This is a string"))
// frequencyCounter("This is a string");

module.exports = frequencyCounter;