// Data layer
const limit = 100;
const boxCont = document.querySelector('.box-container') 



for(let x = 1; x <= limit ; x++ ){
  const box = document.createElement('div')
  box.className = 'null'

if(x % 3 === 0){
  box.className = 'fizz';
  box.innerText= "fizz";
}else if(x % 5 === 0){
  box.className ='buzz';
  box.innerText ='buzz';
}else if( x % 3 === 0 && x % 5 === 0){
  box.className  ='fizzbuzz';
  box.innerText = 'fizzbuzz';
}else{
  box.innerText = x;
}




boxCont.append(box);
}
