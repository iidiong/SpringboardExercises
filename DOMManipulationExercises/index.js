/* 
Exercise

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of “second”.
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text “Hello!”.
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text “four”.
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
12. Remove the div with a class of footer
*/

// 1. Select the section with an id of container without using querySelector.
const section1 = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.
const section2 = document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.
const listItemsSecond = document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const listItemsThird = document.querySelectorAll("ol .third");

// 5. Give the section with an id of container the text “Hello!”.
const h1 = document.createElement("h1");
h1.innerText = "Hello!";
section2.prepend(h1);

// 6. Add the class main to the div with a class of footer.
const div1 = document.querySelector(".footer");
div1.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
const div2 = document.querySelector(".footer");
div2.classList.remove("main");

// 8. Create a new li element.
const li = document.createElement("li");

// 9. Give the li the text “four”.
li.innerText = "Four";

// 10. Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(li);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const lis = document.querySelectorAll("ol li");
for (const li of lis) {
    li.style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
const div = document.querySelector(".footer");
div.remove();
