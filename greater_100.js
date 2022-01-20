while(true)
{
    input = prompt('input number',0);
    if(input == '' || input == null || input > 100) //esc -> null
        break;
} //me

let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num); //book