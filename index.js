function isPalindrome(word) {
  // Write your algorithm here
  let len = Math.floor(word.length / 2);
  for (let i = 0; i < len; i++)
    if (word[i] !== word[word.length - i - 1])
      return false;
  return true;
}

/* 
  Add your pseudocode here
  get and input 
  check if its a palidrome
  if yes return true
  if no return false
*/

/*
  Add written explanation of your solution here
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
