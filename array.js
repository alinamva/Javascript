// function twoSum(array1, array2) {
//   return Number(array1.join("") + array2.join(""));
// }

// console.log(twoSum([1, 2, 3], [0, 7]));

// function luckyNumber(value) {
//   let str = String(value);
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   if (str == revStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(luckyNumber(12321));

// function errorMessage(input) {
//   if (!input) {
//     return "Required field";
//   } else if (!Number(input)) {
//     return "Must be a number besides 0";
//   } else {
//     return "";
//   }
// }

console.log(errorMessage("123"));
console.log(errorMessage(""));
console.log(errorMessage("abc"));
