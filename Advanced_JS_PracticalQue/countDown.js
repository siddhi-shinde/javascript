function countdown(seconds){
    let time = seconds;
    const timer = setInterval(()=> {
        console.log(time,"Seconds remaining");
        time--;
        if(time <0){
            clearInterval(timer);
            console.log("Time's up!")
        }
    },1000);
}
countdown(60)