"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 23,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: "",
  service2: "",
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );
    //for (let i = 0; i < screens.split(", ").length; i++) {
    //  console.log(screens.split(", ")[i]);
    //}

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
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

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      sum += (() => {
        let n = 0;
        do {
          n = prompt("Сколько это будет стоить?");
        } while (!appData.isNumber(n));
        return +n;
      })();
    }
    return sum;
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    return (
      appData.title.trim().charAt(0).toUpperCase() + appData.title.slice(1)
    );
  },

  getServicePercentPrice: function () {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.logger();
  },
  logger: function () {
    //console.log(appData.fullPrice);
    //console.log(appData.servicePercentPrice);

    for (let key in appData) {
      console.log(key, appData[key]);
    }
  },
};

appData.start();
