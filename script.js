// Arithmetic Operator

// + - * / % **

console.log(12+13)
console.log(12-13)
console.log(12*13)
console.log(12/13)
console.log(12%13)
console.log(12**13)
console.log(2**3)

// Assignment Operator

// =, +=, -=, *=, /=, %=

let a = 12;  

a += 13;  // particular value se badhana 25
console.log(a)

a -= 13;
console.log(a)

a *= 13;
console.log(a)

a /= 13;
console.log(a)

a %= 3;
console.log(a)

// Comparision Operator

// ==, ===, !=, !==, >,<, <=, >=

// == not strict compare  ise kabhi bhi use nahi karna
// === strict compare   ise karna hai

// 12 == "12"  yeh true return karega
console.log(12=='12')
console.log(12==='12')   //false

// != never use this
// !== always use this
console.log(12!='12')  // false
console.log(12!=='12')  // true

console.log(12>13)
console.log(12<13)
console.log(12<=13)
console.log(12<=12)


// Logical Operstors

// && || !   ye true aur false return karte hai

// &&  isme agar dono condition true hai toh true return karega koi ek false hai toh false
// return karega dono condition ka true hona jaruri hai

/*
|| = isme koi ek condition true ho toh true aur dono true hai toh bhi true baki me false
*/

// ! not ye true ko false flase ko true kardega


/*          Ternary Operator*/

// condition ? doThis:doThat

12>13 ? console.log("T"):console.log("F")
12<13 ? console.log("T"):console.log("F")

/*-----------Type checking operators* */

// typeof
// instaceof   aage padege

console.log(typeof 12)



/**----------------String Operator*------------ */

// + for concatenation

console.log("Ankit"+"Gujre")
console.log("Ankit"+" "+"Gujre")






/*--------------------spread and rest operators---------*/

//  spread operator ... kehlata hai
// let arr = [1,2,3,4]
// a = [...arr]    copy karne ke liye
// rest operator bhi ... kehlata hai  functions ke saath use hota hai

/**-------------nullish coelshing operator ----------*/

/**-------optional chaning----- */

/**-------------variable hoisting in js----------- */

// var b = 12;  hoisting ka matlab hai variable ko banane se pehle bhi use kiya ja sakta hai
// hoisting me apka variable toot jata hai do hisso me