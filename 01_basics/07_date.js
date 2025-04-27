//Date obj represnet single moment inital januaary 1st 1970
//declare in mili seconds
//temporal not exist so date learn

//instance of Date
let myDate =  new Date();
//this format not used and not compareable
console.log(myDate); //2025-04-27T15:58:56.554Z
//convert date to string 
//better than above format 
console.log(myDate.toString()); //Sun Apr 27 2025 16:00:27 GMT+0000 (Coordinated Universal Time)
//todatestring toiosstring and tolocalstring  toJson  check it for testing

console.log(myDate.toDateString()); //Sun Apr 27 2025
console.log(myDate.toLocaleString()); //4/27/2025, 4:02:49 PM
console.log(typeof myDate); ///object 

//declare specific date
//month start from zero in js 
//value can b any time minute hour etc
let myCreateDate = new Date(2023,0,23);
//according to given number format given 
let myCreateDate1 = new Date(2023,0,23,5,3,2);
//yy mm dd format
//here month count start from 1 
let myCreateDate2 = new Date("2023-01-14");
//  mm dd yy format
let myCreateDate3 = new Date(" 01-14-2023");

console.log(myCreateDate.toDateString()); //Mon Jan 23 2023 

console.log(myCreateDate1.toLocaleString()); //1/23/2023, 5:03:00 AM
console.log(myCreateDate2.toLocaleString());
console.log(myCreateDate3.toLocaleString());
//Time Stamps in Date Object exact time stamp poll quiz etc 
let myTimeStamp = Date.now();

//comparison always in milisecond
console.log(myTimeStamp); //1745770466384
//milisecond  value with date.now 
//check create date in milisecond use it   //exact value used for comaprison
console.log(myCreateDate.getTime());
//convert into seconds divide by 1000 avoid decimal value used math
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//start from 0 month in single value 
//extract only month or year methods   day milisecond hour method etc
console.log(newDate.getMonth());  // 3 april
//getMonth()+1  for user show case 
console.log(newDate.getDay()); //0 sunday
//useful method
//in this define object or more parameters
newDate.toLocaleString('default', {
    //mention property with ctrl+space
    //define customize format with property 
    //customize more proeprty with it according to our format 
    weekday: "long",
    

});
console.log(newDate);