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
    this.addTitle();
    buttonStart.addEventListener("click", this.start.bind(this));
    buttonReset.addEventListener("click", this.reset.bind(this));
    buttonPlus.addEventListener("click", this.addScreenBlock.bind(this));
    rollbackInput.addEventListener("input", this.logger2.bind(this));
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
      this.fullPrice - this.fullPrice * (rollbackInput.value / 100)
    );
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    totalFullCount.value = this.fullPrice;

    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.countSum;
  },

  chekInput: function () {
    if (this.screens.find((item) => item.price == 0)) {
      return true;
    } else {
      return false;
    }
  },

  addScreens: function () {
    appData.length = 0;
    this.screens.length = 0;

    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },
  addServices: function () {
    otherItemsPercen.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.rollback = +rollbackInput.value;

    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * (rollbackInput.value / 100)
    );

    for (let screen of this.screens) {
      this.countSum += +screen.count;
    }
  },

  disabledElem: function () {
    const select = document.querySelectorAll(".screen select");
    select.forEach((item) => {
      item.disabled = !item.disabled;
    });
    const input = document.querySelectorAll(".screen input[type=text]");
    input.forEach((item) => {
      item.disabled = !item.disabled;
    });
  },

  disabledButton: function () {
    buttonStart.style.display = "none";
    buttonReset.style.display = "block";
  },

  disabledButton2: function () {
    buttonStart.style.display = "block";
    buttonReset.style.display = "none";
  },

  resetInput: function () {
    const input = document.querySelectorAll(".screen input[type=text]");
    input.forEach((item) => {
      item.value = "";
    });
    const select = document.querySelectorAll(".screen select");
    select.forEach((item) => {
      item.options.selectedIndex = 0;
    });

    const total = document.querySelectorAll(".main-total input[type=text]");
    total.forEach((item) => {
      item.value = "0";
    });
    const check = document.querySelectorAll("input[type=checkbox]");
    check.forEach((item) => {
      item.checked = false;
    });

    for (let i = 1; i < screens.length; i++) {
      screens[i].remove();
    }

    this.title = "";
    this.screens = [];
    this.screenPrice = 0;
    this.countSum = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
  },

  reset: function () {
    this.resetInput();
    this.disabledElem();
    this.disabledButton2();

    this.addScreens();
    console.log(appData);
  },

  start: function () {
    this.addScreens();
    if (this.chekInput() === false) {
      this.addServices();
      this.addPrices();
      this.showResult();
      this.disabledElem();
      this.disabledButton();
    }
  },
};

appData.init();
