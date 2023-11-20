'use strict';

// let per1=prompt("enter Player1 name")
// let per2=prompt("enter Player2 name")



let score1=document.querySelector('.score1');
let score2=document.querySelector('.score2');
let rolldice = document.querySelector('.dicebtn');
let dice=document.querySelector(".dice")
let hold=document.querySelector(".holdbtn")
let player1=document.querySelector(".player1")
let player2=document.querySelector(".player2")
let currentscore1=document.querySelector(".currscore1")
let currentscore2=document.querySelector(".currscore2")
let winner=  document.querySelector(".winner");
let name1=document.querySelector(".name1")
let name2=document.querySelector(".name2")
let newgame=document.querySelector(".new")

score1.textContent=0;
score2.textContent=0;

let activeplayer=1;

let currentscore=0;

// name1.textContent=per1;
// name2.textContent=per2;

rolldice.addEventListener('click', function () {
  let currentPlayer=document.querySelector(`.currscore${activeplayer}`)
  let diceno=(Math.floor( Math.random()*6)+1);
  
  dice.src=`./dice-${diceno}.png` 


  if (diceno!==1){
  
    currentscore=currentscore+diceno;
  currentPlayer.textContent =currentscore;
   
  }else{
    //if dice no==1 switches player && makes current score zero 
    document.querySelector(`.currscore${activeplayer}`).textContent=0
    currentscore=0;
    activeplayer=activeplayer==1?2:1;//changing active player
     
    //handles opacity]
    player1.classList.toggle("playerActive")
    player2.classList.toggle("playerActive")

  }
});

hold.addEventListener('click',function(){

// totalscore=totalscore+currentscre
document.querySelector(`.score${activeplayer}`).textContent=Number(document.querySelector(`.score${activeplayer}`).textContent)+currentscore;
currentscore=0;
document.querySelector(`.currscore${activeplayer}`).textContent=0;
if(Number(document.querySelector(`.score${activeplayer}`).textContent)>=50){  

  //display winner
  winner.classList.toggle("whid")
winner.innerHTML=`<button class="close" onClick="cloce()" >x</button>❤️ Player ${activeplayer} Wins`
hold.disabled=true;
rolldice.disabled=true;
dice.src="";
//opacity
player1.classList.remove("playerActive")
player2.classList.remove("playerActive")
}else{

  //changing active player
  activeplayer=activeplayer==1?2:1;
  
}
 //opacity
player1.classList.toggle("playerActive")
player2.classList.toggle("playerActive")

});

function cloce(){

  //closing winner tab
  winner.classList.toggle("whid")

  

}

newgame.addEventListener("click",function(){


  score1.textContent=0;
  score2.textContent=0;
  
   activeplayer=1;
  
   currentscore=0;
   dice.src="";


   player1.classList.remove("playerActive")
   player2.classList.add("playerActive")


   document.querySelector(`.currscore${activeplayer}`).textContent=0;

   hold.disabled=false;
rolldice.disabled=false;

})
