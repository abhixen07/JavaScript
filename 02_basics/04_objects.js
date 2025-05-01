//constructor method of object/Singleton
const tinderUser = new Object();
//litral method /nonSingleton 
const tinderUser2= {}
// both are same  only singleton differ other thing same
console.log(tinderUser);
console.log(tinderUser2);
//constructor approach   used in this file 

tinderUser.id =  "124abc"
tinderUser.name = "anam";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//now in object give object as value 
//we will do nesting in obj within obj also possible as value 
const regularUser = {
   email : "sum@email.com",
   fullname : {
       userfullname: {
           firstname: "abc",
           lastname: 'abcded'
       }
   }

}
//for nesting acessing 
console.log(regularUser.fullname.userfullname);
//with dot nesting open
console.log(regularUser.fullname.userfullname.lastname);

//optional channing ?. protection for api if not exist
//so this used if exist that value then do the next running

//combine objects  
const obj1 =  {
    1:"a",
    2:"b",
}
const obj2  = {
    3: "c",
    4: "d"

}
//const obj3 =  {obj1,obj2}  //not sum here two object shown simple obj within obj
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj3); //problem
//we used assign to assign value
//return target obj 
//Object assign method
//const obj3 = Object.assign(obj1,obj2) // obj2 add to obj1 not good
const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3); //now all source added to source
//empty obj mean all other  obj add in it
//moslty used this method easy  same like array  spread all obj auto add to new obj
//easy simple latest 
//spread then combine
const obj4 =  {...obj1,...obj2}

console.log(obj4);

//when value come from database then value like that 
//array of object from db
//real obj  some cases 
const user = [
    {
        id:1,
        email: "anam@gmalil"

    },
    {
        id:2,
        email: "anam@gmalil"

    },
    {
        id:3,
        email: "anam@gmalil"

    },

]

//access this also this method used in this format object 
//mean access 1st index of array with obj property 
console.log(user[1].email);
console.log(tinderUser);
//these all return arrays for keys values entries
//object.keys for accessing keys 
//all keys fetch and data type of it is array 
//used for looping data base work these things useful
console.log(Object.keys(tinderUser));
//access values 
console.log(Object.values(tinderUser));
//used length  etc these proeprty also exist
//return array withing aray
//first key second value
console.log(Object.entries(tinderUser));
//if value not exist then crach chances to avoid it we can ask using hasOwnProperty
// used in quatation
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true,false cnfrm value exist no crach chances

//check method in console also


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anam"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]