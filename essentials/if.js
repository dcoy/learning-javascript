// if statements in JS
var x = 10;
if (8 > 5) {
  console.log("8 is greater");
}

// Else if
if (8 > x) {
  console.log("8 is greater");
} else if (15 > x) {
  console.log("15 is greater!");
} else {
  console.log("8 is not greater!");
}

function helper(x) {
  if (x % 2 == 0) {
    console.log("The number is even!");
  } else {
    console.log("The number is odd!");
  }
}

helper(5);
helper(6);
helper(4);