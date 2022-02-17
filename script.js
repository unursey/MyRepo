"use strict";
document.addEventListener("DOMContentLoaded", () => {
  console.log("Дом загружен");

  const DomElement = function (
    selector,
    height,
    width,
    bg,
    fontSize,
    position,
    top,
    left
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.top = top;
    this.left = left;

    this.creatBlock = function () {
      let el;
      if (this.selector[0] === ".") {
        el = document.createElement("div");
        el.className = this.selector.slice(1);
        el.innerHTML = "<span>Какой-то текст</span>";
      }

      if (this.selector[0] === "#") {
        el = document.createElement("p");
        el.id = this.selector.slice(1);
        el.innerHTML = "Какой-то текст";
      }

      el.style.height = this.height + "px";
      el.style.width = this.width + "px";
      el.style.fontSize = this.fontSize + "px";
      el.style.background = this.bg;
      el.style.position = this.position;
      el.style.top = this.top;
      el.style.left = this.left;
      return el;
    };
  };

  const newDiv = new DomElement(".block", 200, 200, "red", 25);
  const newPar = new DomElement("#best", 100, 200, "yellow", 25);

  /*const square = new DomElement(
    ".square",
    100,
    100,
    "red",
    15,
    "absolute",
    0,
    0
  );*/

  document.body.append(newDiv.creatBlock());
  document.body.append(newPar.creatBlock());

  //document.body.append(square.creatBlock());
  //console.log(square);

  /*document.addEventListener("keydown", (event) => {
    const sq = document.querySelector("div");
    let top = 0;
    let left = 0;

    if (event.key == "ArrowRight") {
      left = left + 10;
      sq.style.left = left + "px";
      left++;
      console.log("право");
    }
    if (event.key == "ArrowDown") {
      top = top + 10;
      sq.style.top = top + "px";
      top++;
    }
    // if (event.key === "ArrowUp") {
    //  sq.style.top = left + "px";
    //}
    //if (event.key === "ArrowLeft") {
    //  sq.style.left = left + "px";
    //  console.log("лево");
    //}
  });*/

  //ArrowDown 40
  //ArrowUp 38
  //ArrowLeft 37
  //ArrowRight 39
});
