"use strict";
const title1 = document.getElementsByTagName("h1")[0];

const buttonStart = document.getElementsByClassName("handler_btn")[0];
const buttonReset = document.getElementsByClassName("handler_btn")[1];

const buttonPlus = document.querySelector(".screen-btn");

const otherItemsPercen = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const rollbackInput = document.querySelector(".rollback input[type=range]");
const rollbackRangeValue = document.querySelector(".rollback .range-value");

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const totalFullCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  countSum: 0,
  adaptive: true,
  rollback: 23,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle();
    buttonStart.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    rollbackInput.addEventListener("input", appData.logger2);
  },
  addTitle: function () {
    document.title = title1.textContent;
  },

  // isString: function (str) {
  //  return (
  //     /(?=.*\d)(?=.*[a-zA-Zа-яёА-ЯЁ])/i.test(str) ||
  //     /(?=.*[a-zA-Zа-яёА-ЯЁ])/i.test(str)
  //   );
  // },

  logger2: function () {
    rollbackRangeValue.textContent = rollbackInput.value + "%";
    totalCountRollback.value = Math.ceil(
      appData.fullPrice - appData.fullPrice * (rollbackInput.value / 100)
    );
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;

    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.countSum;
  },

  chekInput: function () {
    if (appData.screens.find((item) => item.price == 0)) {
      return true;
    } else {
      return false;
    }
  },

  addScreens: function () {
    appData.screens.length = 0;
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });

    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercen.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.rollback = +rollbackInput.value;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (rollbackInput.value / 100)
    );

    for (let screen of appData.screens) {
      appData.countSum += +screen.count;
    }
  },

  start: function () {
    appData.addScreens();
    if (appData.chekInput() === false) {
      appData.addServices();
      appData.addPrices();
      //appData.logger();
      appData.showResult();
      console.log(appData);
    }
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

appData.init();
