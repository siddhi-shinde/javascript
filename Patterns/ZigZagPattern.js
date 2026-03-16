function printZigZag(n){

    for(let i = 1; i <= 3; i++){
        let line = "";

        for(let j = 1; j <= n; j++){

            if((i + j) % 4 == 0 || (i == 2 && j % 4 == 0)){
                line += "*";
            }
            else{
                line += " ";
            }
        }

        console.log(line);
    }
}
printZigZag(9);

