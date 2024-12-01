/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/



const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },1000)
})

const myAnotherPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },5000);
})
// let a=0;
// myPromise.then((val)=>{
//     a+=val;
// })

// myAnotherPromise.then(function(val){
//     a+=val;
//     console.log(a);
// })

Promise.all([myPromise,myAnotherPromise]).then((values)=>{
    let sum=values[0]+values[1];
    console.log(sum);
})
