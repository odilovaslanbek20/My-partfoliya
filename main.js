let yosh = document.querySelector(".year");
let yosh1 = document.querySelector(".year1");
let yil = 2008;
let oy = 12;
let kun = 20;

let date = new Date()
let joriyYil = date.getFullYear()
let joriyOy = date.getMonth()+1;
let joriyKun = date.getDate()

let age = joriyYil - yil;

if (joriyOy < oy || (joriyOy === oy && joriyKun < kun)) {
    age--;
}

yosh.textContent = age;
yosh1.textContent = age;

clearInterval(yourAutoScrollFunction); // Avto-scroll funksiyasini to‘xtatish
