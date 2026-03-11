function printnumberPyramid(rows){
    for(let i=1;i<=rows;i++){
        line=""
        for(let j=1;j<=rows-i;j++){
            line+=" "
        }
        for(let j=1;j<=i;j++){
            line+=" "+i
        }
        console.log(line);
    }
}printnumberPyramid(5)