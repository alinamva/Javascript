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

// console.log(errorMessage("123"));
// console.log(errorMessage(""));
// console.log(errorMessage("abc"));

// function cookingStatus(remainingTime) {
//   if (remainingTime == 0) {
//     return "Lasagna is done.";
//   } else if (remainingTime > 0) {
//     return "Not done, please wait.";
//   } else {
//     return "You forgot to set the timer.";
//   }
// }
// console.log(cookingStatus(1));
// console.log(cookingStatus(0));

// console.log(cookingStatus());
// function preparationTime(layers, time) {
//   if (time) {
//     return layers.length * time;
//   } else if (!time) {
//     return layers.length * 2;
//   }
// }
// const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
// console.log(preparationTime(layers, 3));
// console.log(preparationTime(layers));

// function quantities(arr) {
//   let noodles = 0;
//   let sauce = 0;
//   let obj = {};
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == "noodles") {
//       noodles += 50;
//     } else if (arr[i] == "sauce") {
//       sauce += 0.2;
//     }
//     obj["noodles"] = noodles;
//     obj["sauce"] = sauce;
//   }
//   return obj;
// }

// arr = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
// console.log(quantities(arr));

// function addSecretIngredient(friendsList, myList) {
//   myList.push(friendsList[friendsList.length - 1]);
//   console.log(myList);
// }
// const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
// const myList = ["noodles", "meat", "sauce", "mozzarella"];

// console.log(addSecretIngredient(friendsList, myList));

// function scaleRecipe(recipe, num) {
//   let newObj = {};

//   for (let i in recipe) {
//     newObj[i] = (recipe[i] * num) / 2;
//   }
//   return newObj;
// }

// const recipe = {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };

// console.log(scaleRecipe(recipe, 3));

// rest spread
//destructuring
// function getFirstCard(deck) {
//   let [first] = deck;
//   return first;
// }

// console.log(getFirstCard([3]));
// function getSecondCard(deck) {
//   let [first, second] = deck;
//   return second;
// }

// console.log(getSecondCard([3, 4]));
// function swapTopTwoCards(deck) {
//   let [one, two, ...rest] = deck;

//   return [two, one, ...rest];
// }
// console.log(swapTopTwoCards([10, 7, 1, 2, 3, 4, 3]));

// function discardTopCard(deck) {
//   let [first, ...rest] = deck;
//   return [first, [...rest]];
// }

// console.log(discardTopCard([7, 3, 56, 23, 24]));

// const adds = ["one", "two", "three"];

// function insertCards(deck) {
//   const [first, ...rest] = deck;
//   return [first, ...adds, ...rest];
// }

// console.log(insertCards([1, 2, 3]));

// function getCardPosition(stack, card) {
//   return stack.indexOf(card);
// }
// console.log(getCardPosition([1, 2, 3], 2));

// function isEachCardEven(stack) {
//   return stack.every((card) => card % 2 == 0);
// }
// console.log(isEachCardEven([6, 2, 10, 4, 2]));

// function getFirstOddCard(stack) {
//   let firstOdd = stack.find((card) => card % 2 !== 0);
//   return firstOdd;
// }
// console.log(getFirstOddCard([2, 6, 5, 4, 2, 3]));

// function getFirstEvenCardPosition(stack) {
// let firstEven = stack.find((card) => card % 2 == 0);
// return stack.indexOf(firstEven);

//   return stack.findIndex((card) => card % 2 == 0);
// }

// console.log(getFirstEvenCardPosition([2, 4, 6, 8, 3, 5]));
// function threeOfEachThree(deck) {
//   let threeDeck = [];
//   for (let card of deck) {
//     if (card == 3) {
//       threeDeck.push(3, 3, 3);
//     } else {
//       threeDeck.push(card);
//     }
//   }
//   return threeDeck;
// }
// console.log(threeOfEachThree([1, 2, 3, 5, 6, 3, 5]));

// function sandwichTrick(deck) {
//   let first = deck.pop();
//   let last = deck.shift();
//   let middle = deck.length / 2;
//   deck.splice(middle, 0, first, last);
//   return deck;
// }

// console.log(sandwichTrick([1, 2, 3, 5, 6, 10]));
// function twoIsSpecial(deck) {
//   let arr = [];
//   deck.filter((card) => {
//     if (card == 2) {
//       arr.push(card);
//     }
//   });
//   return arr;
// }

// console.log(twoIsSpecial([2, 4, 2, 3, 2, 5, 7]));

function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}
console.log(perfectlyOrdered([6, 10, 5, 9, 4, 3, 7, 7, 1, 2, 6, 8, 1, 3]));
