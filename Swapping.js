var str1 = "sweetha";

// Convert the string to an array
var arr = str1.split('');
var counter=0
// Bubble Sort implementation
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the characters
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            counter++
        }
    }
}
// Join the array back to a string
var sortedStr = arr.join('');

console.log(sortedStr);
console.log(counter);


