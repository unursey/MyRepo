"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 23;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даём скидку 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даём скидку 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что-то пошло не так";
  }
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );
  for (let i = 0; i < screens.split(", ").length; i++) {
    console.log(screens.split(", ")[i]);
  }

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    sum += (() => {
      let n = 0;
      do {
        n = prompt("Сколько это будет стоить?");
      } while (!isNumber(n));
      return +n;
    })();
  }
  return sum;
};

function getFullPrice(scrPrice, allSerPrices) {
  return Number(scrPrice) + Number(allSerPrices);
}

function getTitle(string) {
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
}

function getServicePercentPrice(fPrice, rb) {
  return Math.ceil(fPrice - fPrice * (rb / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrice(fullPrice, rollback));
