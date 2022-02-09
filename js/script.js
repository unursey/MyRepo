"use strict";
const title1 = document.getElementsByTagName("h1");
console.log(title1[0]);

const buttons = document.getElementsByClassName("handler_btn");
console.log(buttons);

const plus = document.querySelector(".screen-btn");
console.log(plus);

const element1 = document.querySelectorAll(".other-items.percent");
console.log(element1);

const element2 = document.querySelectorAll(".other-items.number");
console.log(element2);

const input1 = document.querySelector(".rollback input[type=range]");
console.log(input1);

const input2 = document.querySelector(".rollback .range-value");
console.log(input2);

const input3 = document.getElementsByClassName("total-input");
console.log(input3[0]);
console.log(input3[1]);
console.log(input3[2]);
console.log(input3[3]);
console.log(input3[4]);

let screen = document.querySelectorAll(".screen");
console.log(screen);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 23,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},

  // isString: function (str) {
  //  return (
  //     /(?=.*\d)(?=.*[a-zA-Zа-яёА-ЯЁ])/i.test(str) ||
  //     /(?=.*[a-zA-Zа-яёА-ЯЁ])/i.test(str)
  //   );
  // },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name = 0;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(name));

      let n = 0;

      do {
        n = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(n));

      appData.screens.push({ id: i, name: name, n: n });
    }

    for (let i = 0; i < 2; i++) {
      let name = 0;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));

      let n = 0;
      do {
        n = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(n));

      appData.services[name] = +n;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.n;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даём скидку 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даём скидку 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что-то пошло не так";
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim().charAt(0).toUpperCase() + appData.title.slice(1);
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrice();
    appData.logger();
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);

    // for (let key in appData) {
    //   console.log(key, appData[key]);
    // }
  },
};

//appData.start();
