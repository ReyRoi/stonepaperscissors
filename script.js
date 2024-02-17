
const man = document.querySelector('.man')
const bot= document.querySelector('.bot')
const manHand = document.getElementById('manimg')
const botHand = document.getElementById('botimg')
const container =document.querySelector('.container')
const btn = document.querySelectorAll('.btn')
const result = document.getElementById('result')

const start = document.querySelector('.start')
const arr =["Stone","Paper","Scissors"]


start.onclick =()=>{
    container.style.visibility = "visible"
    start.style.visibility ="hidden"
}
function handshake(index, random) {
    man.classList.add("shake")
    bot.classList.add("shake")
    manHand.src = `images/${index}.png`;
    botHand.src = `images/${random}.png`;
}
function game(event){
    let random = Math.floor(Math.random() * 3)
    let valuePressed = event.target.name;
    let botPressed = arr[random]
    let manValue= event.target.dataset.num;
    if( (valuePressed=='Stone' && botPressed=='Scissors') || 
    (valuePressed=='Paper' && botPressed=='Scissors') ||
    (valuePressed=='Scissors' && botPressed=='Paper')){
        handshake(manValue,random)
        result.innerText="You have Won!"
    }else if(valuePressed == arr[random]){
        handshake(manValue,random)
        result.innerText="Tie!"
    }else{
        handshake(manValue,random)
        result.innerText="Computer has Won!"
    }

    result.style.visibility = "visible"; 
    setTimeout(function() {
        result.style.visibility = "hidden"; 
        man.classList.remove("shake")
        bot.classList.remove("shake")
    }, 1000);

    
}
btn.forEach(function  (button){
    button.addEventListener('click',game)
})