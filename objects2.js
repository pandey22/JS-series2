const tinderUser = {}
tinderUser.id="tin2"
tinderUser.name="Kshitij"
tinderUser.isLoggedin=false


// console.log(tinderUser);

const regUser = {
    email: "kp@gmail.com",
    fulname:{
        userFullName:{
            fName: "Kshitij",
            lName: "Pandey"
        }
    }
}

// console.log(regUser.fulname.userFullName.fName);


// //merging two objects in one 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"v",4:"x"}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);