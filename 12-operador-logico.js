/*OPERADOR LOGICO

&& -- e
true && true = true
true && false = false
false && false = false

|| -- ou
true || true = true
true || false = true
false || false = false

! -- negaçao 
!true = false
!false = true

*/
console.log(!(!(true && true && true) && !(false || true)))
