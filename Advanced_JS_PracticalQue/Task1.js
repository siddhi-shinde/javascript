
// Example 1
function fetchData(callback){
    setTimeout(()=> {
        const data = {name:"Siddhi Shinde",age:23};
        callback(data);
    },0);
    }
function displayData(data){
    console.log("Data:",data);
}
fetchData(displayData);

// Example 2
function readFile(callback){
    setTimeout(()=>{
        const fileData="This is File Data";
        callback(fileData)
    } ,1500);
}

readFile((data)=> {
    console.log("File read:",data)
})
