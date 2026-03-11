

function printPascalsTriangle(n){

    for(let i = 0; i < n; i++){
        let line = "";
        let num = 1;

        for(let s = 1; s <= n-i; s++){
            line += " ";
        }

        for(let j = 0; j <= i; j++){
            line += num + " ";
            num = num * (i - j) / (j + 1);
        }

        console.log(line);
    }

}

printPascalsTriangle(5);

