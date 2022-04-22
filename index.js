console.log("working");
// Q1.Write one example explaining how you can write a callback function ?

function callback() {
    console.log("hi ");
    two();
    function two() {
        console.log("how are you?");
    }
}
callback();
//Q2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
//  2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. Explain callback hell.
function getnum() {
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7");
                            }, 7000)
                        }, 6000)
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
getnum();

//Q3.Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
//  2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.
let print = new Promise((resolve,reject)=>{
     resolve();})
     print.then(() => {
        setTimeout(() => {
            console.log("1");
    
        }, 1000)
    }).then(() => {
        setTimeout(() => {
            console.log("2");
    
        }, 2000)
    }).then(() => {
        setTimeout(() => {
            console.log("3");
        }, 3000)
    }).then(() => {
        setTimeout(() => {
            console.log("4");
        }, 4000)
    }).then(() => {
        setTimeout(() => {
            console.log("5");
        }, 5000)
    }).then(() => {
        setTimeout(() => {
            console.log("6");
        }, 6000)
    }).then(() => {
        setTimeout(() => {
            console.log("7");
        }, 7000)
    })

//Q4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state
//  and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
const promisefunc = (arg)=>{
return new Promise((resolve,reject)=>{
if(arg=="yes"){
    resolve("Promise Resolved");
}else{
    reject("promise rejected")
}
})
}
promisefunc("yes").then((data)=>{
console.log(data);
}).catch((err)=>{
console.log(err);
})

//Q5.Create examples to explain callback function

//Q6.Create examples to explain callback hell function :- Q2 is example of callback hell function

//Q7.Create examples to explain promises function:-Q3 & Q4 is the example of promise function.

//Q8.Create examples to explain async await function
async function tryingPromises(){
    console.log("inside the function ");
    const response = await fetch("https://api.github.com/users");
    console.log("before response");
    console.log(response);
    const users = await response.json();
    console.log("user resolved");

    return users;
}
console.log("before calling the function ");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("end of code");