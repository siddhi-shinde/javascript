let promise = new Promise((resolve,reject)=>{
    let success= true;
    if(success){
        resolve("Data Fetched successfully!")
    }else{

       reject("Error while fetching data") 
    }
});

promise
.then((result)=> {
    console.log("success:",result)
})
.catch((error)=>{
    console.log("Error:",error);
});


// Real-time Example
let pizzaPromise= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        let isAvailable = true;
        if(isAvailable){
            resolve("Pizza delivered!")
        }else{
            reject("Pizza shop closed")
        }
    },2000)
})
pizzaPromise
.then((message)=>{
    console.log("Yay!",message)
})
.catch((err)=>{
    console.log("Oops!",err)
})

function fetchData(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const data = { name:"Wisdom Sprouts", age:23};
            resolve(data);
        }, 2000)
    });
}
fetchData()
.then(data=>console.log("Data:",data))
.catch(error=> console.log("Error:",error));