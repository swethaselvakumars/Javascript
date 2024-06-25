let str = "Hello, World!";
let uniqueLetters = new Set();

for (let char of str) {
  // Check if the character is a letter
  if (/[a-zA-Z]/.test(char)) {
    uniqueLetters.add(char.toLowerCase()); // Convert to lower case to ignore case
  }
}

uniqueLetters.forEach(letter => {
  console.log(letter);
});
