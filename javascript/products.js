//products

let index = 0;
let l = document.getElementsByClassName("product");
let a = l.length;
let numOfCards = 4;
let b = a - numOfCards; 
let c = 0;

let i;
for(i=0; i<numOfCards ;i++){
  l[i].style.display = "grid";
}

function plus(n){
  if(c >= b || c<=0){
      c=0;
  }
  if(n == 1){
    l[index + c].style.display = "none";
    l[a-b+c].style.display = "grid";
    c++;
  }
  else{
    l[index + c].style.display = "grid";
    l[a-b+c].style.display = "none";
    c--;
  }
  
}