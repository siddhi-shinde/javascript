async function fetchData(){
    let response = await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects");
    let data = await response.json();
    console.log(data);
}

fetch("https://api.com/data")
.then(res=> res.json())
.then(data=> console.log(data))
.catch(err => console.log(err));

async function getData(){
    try{
        let res = await fetch("https://api.com/data");
        let data = await res.json();
        console.log(data);
    }catch(error){
        console.log("Error:",error);
    }
    }

    async function getUser(){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            console.log("User:",user)
        }catch(err){
            console.log("Failed to fetch user:",err)
        }
    }
    getUser();