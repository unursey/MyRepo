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
let n = fullPrice*(rollback/100);
console.log(n);


console.log(title = prompt("Как называется ваш проект?"));
console.log(screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"));
console.log(screenPrice = prompt("Сколько будет стоить данная работа?", "12000"));
console.log(adaptive = confirm("Нужен ли адаптив на сайте?"));
let service1;
console.log(service1 = prompt("Какой дополнительный тип услуги нужен?"));
let servicePrice1;
console.log(servicePrice1 = +prompt("Сколько это будет стоить?"));
let service2; 
console.log(service2 = prompt("Какой дополнительный тип услуги нужен?"));
let servicePrice2;
console.log(servicePrice2 = +prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - n);
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
