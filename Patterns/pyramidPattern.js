function printPyramid(rows){
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
}
printPyramid(5);