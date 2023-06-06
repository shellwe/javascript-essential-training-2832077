/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let deskItems = ["tissue", "coke can", "phone", "laptop", "spoon"];

console.log(deskItems);
deskItems.unshift(deskItems.pop());
// let lastItem = deskItems.pop()
// console.log(lastItem);
console.log(deskItems);
deskItems.sort();
console.log(deskItems);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
