function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  Declare a function isPalindrome,take a word argument 
     reverse the letters in word
      if the reversed word is same as word return false else true
*/



/*
  Add written explanation of your solution here
  Create a function that takes in a string and then converts the string using split(' ')method to an array.
  Use the .reverse() method to reverse the array, the join(" '") method to join
  the array back to a single string.
  Compare the string we passsed as a parameter
  and match it to the reversed word and return true if they match else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
