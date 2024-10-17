console.log(2+2);
console.log("hello!");

// variables

let x = "soraya";
console.log(x);
const y =(2-2);
console.log(y);

// objects

let person = {
  name : "Ali",
  age : 20 ,
  admin : true
  
}
 console.log(person);

 let car = {
  color : "red",
  brand : "BMW"
 }
 console.log(car.color);

 let country = {
  capital : "Baku",
  president : "Ali"
 }
 console.log(country["capital"]);

// Arrays

 let users = ["ali", "sum"," Jun"]
 console.log(users);
 let cars = ["BMW", "Toyota", "Ferrari", "ford"]
 console.log(cars[1], cars[3])

 console.log(users.length)

 let classes = ["books", "pens", "prnciles"]
 // here we can changed the elements
 classes[2]= "marker"
 console.log(classes[2])

 // functions

 function greet(name, age) {
  let calc =2/2;
  console.log(calc);
  console.log("Hello " + name  + " you are " + age + " years old");
 }
 greet("Soraya", 25);

 function square (number) {
  return number*number;
 }

 let result = square(4);
 console.log(result);
 

