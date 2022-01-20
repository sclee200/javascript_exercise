let base = prompt('input base number', 1);
let pownum = prompt('input pow number >= 1', 1);
while(pownum <= 0)
{
    pownum = prompt('input pow number >= 1', 1);
}

function pow(x, y)
{
   return Math.pow(x,y);
}
   
alert(pow(base,pownum)) //me

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
  } else {
    alert( pow(x, n) );
  }//book