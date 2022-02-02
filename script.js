"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 23;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
let allServicePrices;

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

const getAllServicePrices = function (sPrice1, sPrice2) {
  return sPrice1 + sPrice2;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(scrPrice, allSerPrices) {
  return scrPrice + allSerPrices;
}
fullPrice = getFullPrice(screenPrice, allServicePrices);

function getTitle(string) {
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
}
title = getTitle(title);

function getServicePercentPrice(fPrice, rb) {
  return Math.ceil(fPrice - fPrice * (rb / 100));
}
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);

for (let i = 0; i < screens.split(", ").length; i++) {
  console.log(screens.split(", ")[i]);
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrice(fullPrice, rollback));
