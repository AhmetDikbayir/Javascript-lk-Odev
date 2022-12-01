let userName = prompt("Kullanıcı Adınızı Giriniz: ")
let nameDOM = document.querySelector('#myName')
let myHourDOM = document.querySelector('#hour')
let myMinuteDOM = document.querySelector('#minute')
let mySecondDOM = document.querySelector('#second')

nameDOM.innerHTML = `${userName ? userName : 'Lütfen bir kullanıcı adı giriniz...'}`
dayDOM = document.querySelector('#day')

var gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
function showTime() {    
    var d = new Date();
    var hour = d.getHours();
    hour = hour <= 9 ? "0" + hour : hour;
    myHourDOM.innerHTML = hour;
    minute = d.getMinutes();
    minute = minute <= 9 ? "0" + minute : minute;
    myMinuteDOM.innerHTML = minute;
    var second = d.getSeconds();
    second = second <= 9 ? "0" + second : second;
    mySecondDOM.innerHTML = second;
}
setInterval(showTime, 1000);

var d = new Date();
dayDOM.innerHTML = gunler[d.getDay()];
