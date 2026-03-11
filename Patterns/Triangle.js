function printTriangle(n){
for(let i=1;i<=n;i++){
    line=''
    for(let j=1;j<=i;j++){
     line +='* ' 
    }
   console.log(line)
}
}
printTriangle(5)