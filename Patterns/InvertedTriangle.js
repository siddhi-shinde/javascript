function printInvertedTriangle(n){
for(let i=1;i<=n;i++){
    line=''
    for(let j=n;j>=i;j--){
     line +='* ' 
    }
   console.log(line)
}
}
printInvertedTriangle(5)