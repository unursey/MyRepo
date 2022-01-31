let title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 116;
let rollback = 23;
let fullPrice = 33333;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);   
let conc = "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани";
console.log(conc);             
let conc2 = "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани";
console.log(conc2);
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(fullPrice*(rollback/100));

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice1 = +prompt("Сколько это будет стоить?");
 
let service2 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice*(rollback/100)));
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log('Даём скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даём скидку 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так');
}
