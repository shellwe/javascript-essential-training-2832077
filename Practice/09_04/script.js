/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");

const cellsOld = document.querySelectorAll(".cell");
console.log(cellsOld)

const cells = document.querySelectorAll(".cell");
console.log(cells)

const entirePage = document.querySelector("body");

grid.addEventListener(
    "mouseenter",
    () => {
        grid.classList.add("background");
    },
    false
);
grid.addEventListener(
    "mouseleave",
    () => {
        grid.classList.remove("background");
    },
    false
);


cells.forEach((cell) => {
    cell.addEventListener(
        "mouseenter",
        () => {
            cell.classList.add("background");
        },
        false
    );
    cell.addEventListener(
        "mouseleave",
        () => {
            cell.classList.remove("background");
        },
        false
    );

    cell.addEventListener("click", () => {
        cell.classList.toggle("clicked");
        console.log("Button was clicked!");
    }, false);

});

document.addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 97) {
        return;
    }
    // push a button
    entirePage.classList.toggle("body-color");

});
