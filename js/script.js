"use strict";

const boo = document.querySelectorAll(".book");
boo[1].after(boo[0]);
boo[0].after(boo[4]);
boo[5].after(boo[2]);

const back = document.querySelector("body");
back.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

const adv = document.querySelector(".adv");
adv.remove();

const title2 = document.querySelectorAll("h2")[2];
title2.textContent = "Книга 3. this и Прототипы Объектов";
title2.style.color = "darkkhaki";

const ul2 = document.querySelectorAll("ul")[1];
console.log(ul2);
const list2 = ul2.querySelectorAll("li");
console.log(list2);
list2[3].after(list2[6]);
list2[6].after(list2[8]);
list2[9].after(list2[2]);

const ul5 = document.querySelectorAll("ul")[4];
console.log(ul5);
const list5 = ul5.querySelectorAll("li");
console.log(list5);
list5[1].after(list5[9]);
list5[9].after(list5[3]);
list5[3].after(list5[4]);
list5[7].after(list5[5]);

const ul6 = document.querySelectorAll("ul")[5];
console.log(ul6);
const list6 = ul6.querySelectorAll("li");
console.log(list6);

const newList6 = document.createElement("li");
newList6.textContent = "Глава 8: За пределами ES6";
list6[8].append(newList6);
