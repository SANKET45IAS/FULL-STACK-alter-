let P1 = new Promise((resolve,reject)=>{
setTimeout(resolve,2000,"First");
});
let P2 = new Promise((resolve,reject)=>{
setTimeout(resolve,3000,"Second");
});
let P3 = new Promise((resolve,reject)=>{
setTimeout(resolve,1000,"Third");
});

Promise.all([P1,P3,P2]).then((success)=>console.log(success)
);