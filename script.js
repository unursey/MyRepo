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

  const newDiv = new DomElement(".block", 200, 200, "pink", 25);
  const newPar = new DomElement("#best", 100, 200, "violet", 25);

  const sq = new DomElement(".square", 100, 100, "black", 15, "absolute", 0, 0);
  const square = sq.creatBlock();

  document.body.append(newDiv.creatBlock());
  document.body.append(newPar.creatBlock());

  document.body.append(square);
  console.log(square);

  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
      square.style.left = parseFloat(square.style.left) + 10 + "px";
    }
    if (event.key == "ArrowDown") {
      square.style.top = parseFloat(square.style.top) + 10 + "px";
    }
    if (event.key === "ArrowUp") {
      square.style.top = parseFloat(square.style.top) - 10 + "px";
    }
    if (event.key === "ArrowLeft") {
      square.style.left = parseFloat(square.style.left) - 10 + "px";
    }
  });
});
