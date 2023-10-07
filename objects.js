// objects
// function limesToCut(wedgesNeeded, limes) {
//   let count = 0;
//   let i = 0;
//   while (count < wedgesNeeded && i < limes.length) {
//     if (limes[i] == "small") {
//       count += 6;
//     } else if (limes[i] == "medium") {
//       count += 8;
//     } else {
//       count += 10;
//     }
//     i++;
//   }
//   return i;
// }

// console.log(
//   limesToCut(230, [
//     "small",
//     "large",
//     "large",
//     "medium",
//     "small",
//     "large",
//     "large",
//   ])
// );

// function time(name) {
//   switch (name) {
//     case "Tropical Island":
//       return 3;
//       break;
//     case "Berries & Lime":
//       return 2.5;
//       break;
//     case "Pure Strawberry Joy":
//       return 0.5;
//       break;
//     case "Green Garden":
//       return 1.5;
//       break;
//     case "Energizer":
//       return 1.5;
//       break;
//     case "All or Nothing":
//       return 5;
//       break;
//     default:
//       return 2.5;
//   }
// }

// // console.log(time("Energizer"));

// function remainingOrders(timeLeft, orders) {
//   // const newArr = [];
//   let i = 0;

//   while (i < orders.length && timeLeft > 0) {
//     const juice = orders[i];
//     const juiceTime = time(juice);

//     if (juiceTime > 0) {
//       // newArr.push(juice);
//       timeLeft -= juiceTime;
//       i++;
//     } else {
//       break;
//     }
//   }

//   // Get the remaining orders
//   const remainingOrders = orders.slice(i);

//   return remainingOrders;
// }

// console.log(
//   remainingOrders(13, [
//     "Pure Strawberry Joy",
//     "Pure Strawberry Joy",
//     "Vitality",
//     "Tropical Island",
//     "All or Nothing",
//     "All or Nothing",
//     "All or Nothing",
//     "Green Garden",

//     "Limetime",
//   ])
// );

// function createScoreBoard() {
//   const obj = {};
//   obj["The Best Ever"] = 1000000;
//   console.log(obj);
// }
// createScoreBoard();
// function addPlayer(scoreBoard, player, score) {
//   let obj = {};
//   obj = scoreBoard;
//   obj[player] = score;
//   console.log(obj);
// }
// const scoreBoard = {
//   "Amil Pastorius": 99373,
//   "Min-seo Shin": 0,
// };
// addPlayer(scoreBoard, "Jesse Johnson", 1337);

// function removePlayer(scoreBoard, player) {
//   delete scoreBoard[player];
//   console.log(scoreBoard);
// }

// const scoreBoard = {
//   "Amil Pastorius": 99373,
//   "Min-seo Shin": 0,
//   "Jesse Johnson": 1337,
// };
// removePlayer(scoreBoard, "Jesse Johnson");

// function updateScore(scoreBoard, player, points) {
//   scoreBoard[player] += points;
//   console.log(scoreBoard);
// }
// const scoreBoard = {
//   "Amil Pastorius": 99373,
//   "Min-seo Shin": 3,
//   "Jesse Johnson": 1337,
// };
// updateScore(scoreBoard, "Min-seo Shin", 1999);

// function applyMondayBonus(scoreBoard) {
//   for (let key in scoreBoard) {
//     scoreBoard[key] += 100;
//   }
//   console.log(scoreBoard);
// }

// const scoreBoard = {
//   "Dave Thomas": 44,
//   "Freyja Ćirić": 539,
//   "José Valim": 265,
// };

// applyMondayBonus(scoreBoard);

// function createVisitor(name, age, ticketId) {
//   let obj = {};

//   obj["name"] = name;
//   obj["age"] = age;
//   obj["ticketId"] = ticketId;
//   return obj;
// }

// console.log(createVisitor("Alina", "21", "AJS26"));

// function revokeTicket(visitor) {
//   visitor.ticketId = null;
//   return visitor;
// }

// const visitor = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123",
// };

// console.log(revokeTicket(visitor));

// function ticketStatus(tickets, ticketId) {
//   if (tickets[ticketId] === null) {
//     return "not sold";
//   } else if (tickets[ticketId]) {
//     return `sold to ${tickets[ticketId]}`;
//   } else {
//     return "unknown ticket id";
//   }
// }

// const tickets = {
//   "0H2AZ123": null,
//   "23LA9T41": "Verena Nardi",
// };
// console.log(ticketStatus(tickets, "0H2AZ123"));
// console.log(ticketStatus(tickets, "23LA9T41"));
// console.log(ticketStatus(tickets, "RE90VAW7"));

// function gtcVersion(visitor) {
//   if (visitor.gtc?.signed === true) {
//     return visitor.gtc.version;
//   } else {
//     return undefined;
//   }
// }

// const visitorNew = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123",
//   gtc: {
//     signed: true,
//     version: "2.1",
//   },
// };
// const visitorOld = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123",
// };

// console.log(gtcVersion(visitorOld));

// console.log(gtcVersion(visitorNew));
// let obj = {
//   1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
//   2: ["D", "G"],
//   3: ["B", "C", "M", "P"],
//   4: ["F", "H", "V", "W", "Y"],
//   5: ["K"],
//   8: ["J", "X"],
//   10: ["Q", "Z"],
// };
// const transform = (obj) => {
const obj = { 1: ["A", "E", "I", "O", "U"] };
let exp = {};
for (let i = 1; i < obj[1].length; i++) {
  console.log(obj[i]);
}
// console.log(obj[1]);
// };
// console.log(transform(ob));
