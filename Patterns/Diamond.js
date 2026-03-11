function printDiamond(rows){
    for(let i=1;i<=rows;i++){
        let line=""
        for(let space=1;space<=rows-i;space++){
            line+=" "
        }
           for(let j=1;j<=i;j++){
            line+="* "
        } 
        console.log(line)
    }

 for(let i=1;i<=rows;i++){
        let line=""
        for(let space=1;space<=i;space++){
            line+=" "
        }
           for(let j=1;j<=rows-i;j++){
            line+="* "
        } 
        console.log(line)
    }
}
printDiamond(5);
