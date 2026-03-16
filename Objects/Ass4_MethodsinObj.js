let Calculator={
    add:function(a, b){
    return a+b;
},
    sub:function(a,b){
        return a-b;
    },
    multi:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
};
console.log('Addition :'+Calculator.add(10,5));
console.log('Substraction :'+Calculator.sub(10,5));
console.log('Multiplication :'+Calculator.multi(10,5));
console.log('Division :'+Calculator.div(10,5));