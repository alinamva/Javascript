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

function scaleRecipe(recipe, num) {
  let newObj = {};

  for (let i in recipe) {
    newObj[i] = (recipe[i] * num) / 2;
  }
  return newObj;
}

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(scaleRecipe(recipe, 3));
