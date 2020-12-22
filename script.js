/* Задание 1 */
let a = 22;
let b = true;
let c = 'helloWorld!';
let d = '22';
let e = null;
/* мы прибавляем int к boolean. js хочет привести их к одному типу данных,
так переменная b превращается в 1. Поэтому, сумма a+b =23*/
console.log(a + b);

/* Мы прибавляем строку к инту, и получаем строку */
console.log(a + c);

/* С помощью + перед string'ом мы можем переводить строки в числа */
console.log(a + +d);

/* при сложении типа данных null и integer мы получаем в сумме только integer, тк null = 0 */
console.log(a + e);

/* При сложении boolean и srting все приводится к типу данных string */
console.log(b + c);

/* Все приводится к string */
console.log(c + e);

function second() {
  a = prompt('Введите значение для переменной А');
  b = prompt('Введите значение для переменной Б');

  p = a*2 + b*2;
  
  alert(`Периметр равен: ${p}`);
  console.log(`Периметр равен: ${p}`);
  
  s = a*b;
  alert(`Площадь равна: ${s}`);
  console.log(`Площадь равна: ${s}`);

  o = p / s;
  alert(`Их отношение равно: ${o}`);
  console.log(`Их отношение равно: ${o}`);
}

function third() {
  let t1 = prompt('Введите градусы по шкале цельсия');
  z = '\xB0';
  alert(`${t1}${z}C соответствует ${(t1* 9/5) + 32}` );
  console.log(`${t1}${z} соответствует ${(t1* 9/5) + 32}`);

  let t2 = prompt('Введите градусы по шкале фаренгейта');
  alert(`${t2}${z}F соответствует ${(t2 - 32) * 5/9}` );
  console.log(`${t2}${z}F соответствует ${(t2 - 32) * 5/9}`);
}

function fourth() {
  year = prompt('Введите год');
  result = year % 4 == 0? (year % 100 == 0? false:true) : false;
  alert(result); 
};

function fifth() {
  digit1 = prompt("Введите первое число");
  digit2 = prompt("Введите второе число");
  result = (digit1==10)||(digit2==10)||(digit1 + digit2 == 10)? 'Истина':'ложь';
  alert(result);
}