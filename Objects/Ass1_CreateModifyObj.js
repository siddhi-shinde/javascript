// Creating an object
const student={
        name:'siddhi',
        age:22,
        grade:'A'
};

for(key in student){
    console.log(key+ ' :: ' +student[key])
}
console.log('--------------------------')


// Adding a new property
student.subject='Math';
console.log('After adding new property subject')
for(key in student){
    console.log(key+ ' :: ' +student[key])
}
console.log('--------------------------')


// Update a value
student.grade='A+'

console.log(' After Update grade :'+student.grade)
console.log('--------------------------')


// delete property age
delete student.age;
console.log('After delete age')
for (key in student){
    console.log(key+ ' :: ' +student[key])
}
console.log('--------------------------')