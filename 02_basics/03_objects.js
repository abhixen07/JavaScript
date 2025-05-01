//object and event are more important
//declartion two method literal constructor
//constructor method 
//let obj = new Object()

//singleton => by constructor obj are singleton mean only one obj of it
//literal  method
//not singleton multiple instance created 
//Object.create  also constructor method 
//in array  have index access with index
//obj have key and value both  
//value of any type in obj
//declare  Symbol
//all other type auto convert to string key in obj expect symol
//accept string and symbol
const mySymbol = Symbol("key 1")
const JsUser  = {
    name : "Anam",
    "full name": "Anam Shahzadi",
    age: 15,
    location: 'abcd',
    email: "anam@ddkd.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    //how used symbol as a key  
    //data type considerd as string not symbol with this
   // mySymbol: 'mykey1',
    //used as symbol used in squre bracket
    [mySymbol]: 'mykey1'

}
//behind the scene keys track as string 

//how access objects  
//when give dot not  give as a string its fine here 
console.log(JsUser.email);
//if not pass string then error reference error in this format
console.log(JsUser["email"]);
//when obj key is like a multiple letter with space then dot notation not used
//to access the object then this squre used
console.log(JsUser["full name"]);
//access with squre bracker
///console.log(JsUser.mySymbol); //string type 
//write no string quotation for symbol
//perfect synatx for symbol access  not access with dot notation
//console.log(JsUser.mySymbol);  //undefine

console.log(JsUser[mySymbol]);
//change value with equal
JsUser.email = "anam@abc.com",
//if we want no one change the value we lock it using freez 
//Object.freeze(JsUser)
//when freze no new value added
//now no changes apply on that obj 
JsUser.email = "bddd.com",
console.log(JsUser);



//add function also  with js it behave like a variable we used it anywhere
//greeting behave like key and function is like a value here

JsUser.greeting = function(){
    console.log('Hello Js Users');
    
}
//with this undeifned because greeting is an function
//undefined with this because method not accesible with this syntax
//fn not execute only fn reference 
//console.log(JsUser.greeting);
//error with it  that greeting is not a function because we freeze it 
console.log(JsUser.greeting());
//one undefine return when function not reutrn value in function then in output undefine occur 



//one more function for object here refer property name in it
JsUser.greetingTwo = function(){
    //with string interpolation
    //when refer to same object we used this 
    //when used this => all property  of same obj come here 

    console.log(`Hello Js User ${this.name} `);
    
    
}
console.log(JsUser.greetingTwo());