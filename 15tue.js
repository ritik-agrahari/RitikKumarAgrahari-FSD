//  function rollnumber(num,delay){
//     setTimeout(()=>{
//         console.log("Roll number is ", num);
//         // if (nextroll) nextroll();
//     },delay);
// }
// rollnumber(12121,1000,()=>{
//     rollnumber(12122,2000,()=>{
//         rollnumber(12412,3000,()=>{
//             rollnumber(12512,4000);
//         });
//     });
// });

//-----promise--------------
const promise=new Promise((resolve,reject) => {
    console.log("first")
    resolve("Promise Resolved");
    reject("Promise Rejected");

});
promise.then(() => {
    console.log("This Is my promise");

}).catch(() => {
    console.log("This is my Error Page")
})



