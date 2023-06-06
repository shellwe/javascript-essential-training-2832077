/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

const xanderBackpack = new Backpack (
    "Xander's Backpack",
    10,
    "blue",
    3,
    10,
    10,
    true
);

console.log("Xander's backpack is ", xanderBackpack)