/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const navContent = document.createElement("ul");
navContent.classList.add("menu-items");
navContent.setAttribute("id", "menuId");
//navContent.innerHTML = content;
document.querySelector("main").prepend(navContent);

const homeItem = document.createElement("li");
document.querySelector("#menuId").append(homeItem);
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "home.html");
document.querySelector("#menuId li:last-child").append(homeLink)
homeLink.innerHTML = "home";


const AboutItem = document.createElement("li");
document.querySelector("#menuId").append(AboutItem);
const AboutLink = document.createElement("a");
AboutLink.setAttribute("href", "about.html");
document.querySelector("#menuId li:last-child").append(AboutLink)
AboutLink.innerHTML = "About Us";

const ContactItem = document.createElement("li");
document.querySelector("#menuId").append(ContactItem);
const ContactLink = document.createElement("a");
ContactLink.setAttribute("href", "contact.html");
document.querySelector("#menuId li:last-child").append(ContactLink)
ContactLink.innerHTML = "Contact Us";

document.querySelectorAll("#menuId li").forEach((el) => {
    el.classList.add('menu-item');
});