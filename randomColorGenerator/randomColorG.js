
var min = 100000;
var max = 999999;
const color = document.querySelector('.color');
const btn = document.querySelector('.btn-button');
const container = document.querySelector('.container');

btn.addEventListener("click", function(){
    const numberRandom1 = RandomNumber1(min,max);       
    container.style.backgroundColor = '#' + numberRandom1;
    color.textContent = '#' + numberRandom1;  

    const numberRandom2=RandomNumber2(min,max);
    btn.style.color = '#' + numberRandom2;
});

 function RandomNumber1(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

 function RandomNumber2(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }





