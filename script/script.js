let a = +prompt('введите число');
let b = +prompt("введите число") 
if (a == 0) {              //1
    alert("Верно");
}
else {
    alert("Неверно");
}

if (a > 0) {              //2
    alert("Верно");
}
else {
    alert("Неверно");
}
if (a < 0) {             //3
    alert("Верно");
}
else {
    alert("Неверно");
}
if (a >= 0) {             //4
    alert("Верно");
}
else {
    alert("Неверно");
}
if (a <= 0) {            //5
    alert("Верно");
}
else {
    alert("Неверно");
}
if (a != 0) {          //6
    alert("Верно");
}
else {              
     alert("Неверно");
}
if (a == "test") {      //7
    
}
else {
     alert("Неверно");
}
if (a === 1) {           //8
       alert("Верно");
}
else {
     alert("Неверно");
}
if (a >= 0 && a <= 5) {           //9
       alert("Верно");
}
else {
     alert("Неверно");
}
if (a == 0 || a == 2) {            //10
    a += 7
    alert(a)
}
else {
    a /=10
    alert(a)
}
if (a <= 1 && b >= 3) {          //11
    alert(a + b)
}
else {
    alert(a - b);
}
if (a > 2 && a < 11 || b >= 6 && b < 14) {     //12
       alert("Верно");
    
}
else {
    alert("Неверно");
}
let num = +prompt("Введите число от 1  до 4")
if (num == 1) {           //13
    let result = зима
}
 else if (num == 2) {
   let result = весна
}
else if (num == 3) {
   let result = лето
}
else if(num == 4) {
    let result = осень
}

switch (num) {
    case 1:
           let result = зима
        break;
    case 2:
         let result = весна
        break;
    case 3:
         let result = лето
        break;
    case 4:
        let result = осень
        break;
    default:break
        
}