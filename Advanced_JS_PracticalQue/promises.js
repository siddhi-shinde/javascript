// Example 1
let myPromise= new Promise((resolve,reject)=> {
    reject("successfully resolved");
});
myPromise
.then((data)=> {
    console.log(data);
})
.catch((error)=> {
    console.log("Something Went Wrong:",error);
})

// Example 2
function getUser(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
        console.log("User Fetched");
    resolve({id:1,name:"siddhi"});
    },1000)
});
}

function getOrders(userId){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log("Orders fetched for user",userId)
            resolve(["order1","order2"]);
        },1000)
    })
}

function sendEmail(orderDetails){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log("Email sent for",orderDetails)
            console.log("Email Sent!");
        },1000)
    });
}

// chaining Promises for better readability
getUser()
.then((user)=> getOrders(user.id))
.then((orders)=> getOrders(orders[0]))
.then((orderDetails)=>sendEmail(orderDetails))
.then((confirmation)=> console.log(confirmation))
.catch((error)=> console.log(error))