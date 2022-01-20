
function checkPrime(num) {
    for(let k=2; k < num; k++)
    {
        if(num % k == 0)
            return false
    }
    return true
  }
  
let primeArray = []
let limitNumber = prompt('input number for finding prime number', 1)

for(let i = 1; i <= limitNumber ; i++)
{
   if (checkPrime(i))
     primeArray.push(i)
}

console.log(primeArray)
alert(primeArray) //me
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert( i ); // 소수
} //book