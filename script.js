

// Exercise 1
let result = 0;
let times = 10;

for(let i = 0; i < times;i++){
    result +=10;
}

console.log(result);

// Exercise 2

const fruits = ["apple","orange","banana"];

for(let i = 0; i <= fruits.length; i++) {

const fruit = fruits[i]
switch(fruit){
    case "apple":
        console.log("I like apple ");
        break;
    case "kiwi":
        console.log("I dont like this fruit");
        break;
    case "orange":
        console.log("I like orange"); 
        break;       
}
}

// Exercise 3

let number = 0;

let res;

if(number => 0){
    res =  "Its is greater than 0"
}else if(number <= 0){
    res = "number is smaller than 0"
}else if(number != 0 && number > 0){
    res= "number is uneven and greater than zero"
}else if(number === 0){
    res= "number is 0"
}


console.log(res);

// JavaScript Part II  Advanced Exercise

let btn = document.getElementById("button");

let secBtn = document.querySelector(".DecBtn");

let num = document.querySelector(".incNum");

function incrementCounter(){
    
    num.innerText++;
}

function decrementCounter(){
    
    num.innerText--;
}


btn.addEventListener("click", incrementCounter);
secBtn.addEventListener("click",decrementCounter);



//setInterval(incrementCounter, 1)



// Exercise 2 (HTML & JS)

let hide = document.querySelector("hide");
let smile = document.querySelector(".smile");




hide.addEventListener("click",function(){
smile.toggle.style.display= "block";


})

































// JS Expert exercise part I

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

console.log(gcd(42,56));






// JS Expert exercise part II

