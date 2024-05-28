function myName()
{
    console.log("Kshitij");
}

//passing parameters

// function addTwoNumbers(n1,n2)
// {
//     console.log(n1+n2);
// }
// function addTwoNumbers(n1,n2)
// {
//     let result = n1+n2;
//     return result;
// }

// const result = addTwoNumbers(4,7) // arguments
// console.log(result);

function userLogin(username){
    if(username===undefined)
        {
            console.log("Please enter a username")
            return
        }
        return `${username} just logged in`
}

console.log(userLogin("Kshitij"))