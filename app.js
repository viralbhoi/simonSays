let gameSeq = []
let userSeq = []
let btns = ['blue','green','red','yellow']
let allBtns = document.querySelectorAll('.btn')
let activeGame = false;
let started = false;
let level =0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
  if(started == false){
    console.log("game started");
    started = true;
    activeGame = true;
    levelUp();
  }
})

function buttonFlash(btn){
  btn.classList.add("flash");

  setTimeout(function() {
    btn.classList.remove("flash")
  },150)
}

function levelUp(){
  level++;
  userSeq=[]
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor)

  buttonFlash(randBtn);
}

function checkAns(idx){

  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,750)
    }
  }else{
    h2.innerHTML=`Game Over !!! Your Score : <b>${level}</b> <br>Press any key to Restart`;
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function (){
      document.querySelector('body').style.backgroundColor = 'blanchedalmond';
    },120);
    reset();
  }
}

function btnPress(){

  if(!activeGame) return;

  let btn = this
  buttonFlash(btn)

  userColor = btn.getAttribute('id')
  userSeq.push(userColor)

  checkAns(userSeq.length-1)
}

for(btn of allBtns){
  btn.addEventListener('click',btnPress)
}

function reset(){
  started = false;
  activeGame = false;
  gameSeq=[]
  userSeq=[]
  level=0
}