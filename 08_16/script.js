/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";
console.log("backpackObjectArray result", backpackObjectArray);

const article = document.querySelector("article");

const allBackpacks = backpackObjectArray.map((backpacks) => {
  let htmlGroup = document.createElement("ul");
  console.log("backpacks ", backpacks);

  for (const singleBackpack in backpacks) {
    console.log("singlebackpack ", singleBackpack);
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${backpacks[singleBackpack].name}`;
    console.log("listItem ", listItem);

    //stuffList.append(listItem);
  }
  // listItem.innerHTML = item;
  // return listItem;
});



// for (const singleObject in nestedObjects) {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
//   stuffList.append(listItem);
// }






// import Backpack from "./components/Backpack.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

// const content = `
//     <figure class="backpack__image">
//       <img src=${everydayPack.image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${everydayPack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${everydayPack.volume
//   }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${everydayPack.color
//   }</span></li>
//       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${everydayPack.pocketNum
//   }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${everydayPack.strapLength.left
//   } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${everydayPack.strapLength.right
//   } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${everydayPack.lidOpen ? "open" : "closed"
//   }</span></li>
//     </ul>

// `;

// const main = document.querySelector(".maincontent");

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);
