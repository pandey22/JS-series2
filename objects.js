// //singleton

// //object literals 

// const JsUser = {
//     name: "Kshitij",
//     age:24,
//     location:"India",
//     isLoggedIn : false
// }

// // accessing elements of objects

// //  console.log(jsUser["name"])

// //  jsUser.greeting = function(){
// //     console.log("Hello JS User")
// //  }
// //  console.log(jsUser.greeting);


//  JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
//  }
//  console.log(JsUser.greetingTwo);

const course ={
    name : "Cohort",
    price : 2999,
    courseInstructor : "Harkiart"
}
const {courseInstructor : instructor}=course

console.log(instructor);

[
    {},
    {},
    {}
]