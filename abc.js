
//СЛАЙДЕР
let line = document.querySelector(".block_feedback");
let btnP = document.querySelector(".btn_prev");
let btnN = document.querySelector(".btn_next");
let posit = -25;
let posit_P = -25;

btnP.addEventListener("click", function(){
  posit_P = posit_P + 25;
  line.style.left = `${posit_P}%`;
  if(posit_P >= 0){ posit_P = -25; }
});

btnN.addEventListener("click", function(){
  posit = posit - 25;
  line.style.left = `${posit}%`;
  if(posit <= -150){ posit = 25;}
});




$(function(){ // START


// Окно звонка и таймер вызова ---------------------------------------------------------------------------//
$(".phone_site").click(()=>{
    $(".popUP_numberCall_block").css("display", "flex");
});

$(".btnClose_popUP_numberCall").click(()=>{
    $(".popUP_numberCall_block").css("display", "none");
});


// Таймер вызова --------------------------------------//
function timer_call(){
    let min = 11;
    let timerId = setInterval(function goTimer() {
        min--;
        let out_timer = document.querySelector(".timerSec");
        out_timer.style.fontSize = "25px";
        out_timer.innerHTML = min + 'сек.';
    },1000);
    setTimeout(() => { clearInterval(timerId); out_timer2.innerHTML = 'Мы скоро с вами свяжемся!'; }, 10000);    
    let out_timer2 = document.querySelector(".timerSec");
}
document.querySelector('.btnEng__call').addEventListener('click', timer_call);








// Таймер акции  -------------------------------------//
let countDownDate = new Date('Jul 30, 2023 00:00:00').getTime();
let countDownFunction = setInterval(function(){
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 *24));
let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

let clock = document.querySelectorAll(".timer");
clock.forEach((c)=>{
c.innerHTML = days + 'д.:' + hours + 'ч.:' + minutes + 'мин.:' + seconds + 'сек.';
});

if(distance < 0) {
clearInterval(countDownFunction);
clock.forEach((cl)=>{
    cl.innerHTML = "Акция закончилась !!!";
    });
}
},1000);





/*-------------------------------------------------------------*/
let btn_sign = document.querySelectorAll(".btn_sign");
let btnClose_popUP_signIN = document.querySelector(".btnClose_popUP_signIN");
let popUP_signIN = document.querySelector(".popUP_signIN");
btn_sign.forEach((el)=>{
el.addEventListener("click", ()=>{
    popUP_signIN.style.display = "flex";
});
});
btnClose_popUP_signIN.addEventListener("click", ()=>{
    popUP_signIN.style.display = "none";
});




/*-------------------------------------------------------------*/
let aside_menu = document.querySelector("#aside_menu");
let btn_nav_close = document.querySelector(".btn_nav_close");
let bl_left1 = document.querySelector(".block_aside_menu");
let bl_left2 = document.querySelector(".bl_aside_soc");
let aside = document.querySelectorAll(".menu_head");

aside.forEach((e)=>{
    e.addEventListener("click", ()=>{
        bl_left1.style.left = "0%";
        bl_left2.style.left = "100%";
        aside_menu.style.left = "0%";
    });
});
btn_nav_close.addEventListener("click", ()=>{
    bl_left1.style.left = "-20%";
    bl_left2.style.left = "-39%";
    aside_menu.style.left = "-100%";

});



//-----------------------------------------------------------------------------------//
window.addEventListener("scroll", ()=>{
    if(scrollY > 500){
        $('#Head_eng').css("display", "none");
        $('#Head_eng_Scroll').css("display", "flex");
        $('.phone_site').fadeIn(100);
    }
    else if(scrollY < 5000){
        $('.phone_site').fadeOut(100);
        $('#Head_eng').css("display", "flex");
        $('#Head_eng_Scroll').css("display", "none");
        $('.popUP_numberCall_block').fadeOut(100);
    }
})

});


