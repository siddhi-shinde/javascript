let inputElement = document.getElementById("inputPara");
let outputElement = document.getElementById("output");

let vowels = "aeiouAEIOU";

function vowelCount() {
    let text = inputElement.value;
    let count = 0;

    for(let i=0;i<text.length;i++){
        if(vowels.includes(text[i])){
            count++;
        }
    }

    outputElement.innerHTML="Vowels : "+count;
}

function consonantCount(){
    let text = inputElement.value;
    let count = 0;

for(let i = 0; i < text.length; i++){

    if(!vowels.includes(text[i]) && text[i] != " "){
        count++;
    }

}

outputElement.innerHTML = "Consonants : " + count;
}

function countSpaces(){
    let text=inputElement.value;
    let count=0;

    for(let i=0;i<text.length;i++){
        if(text[i]==" "){
            count++;
        }
    }

    outputElement.innerHTML="Spaces : "+count;
}

function countLines(){
    let text = inputElement.value;
    let count = 1;

    for(let i = 0; i < text.length; i++){
        if(text[i] == "\n"){
            count++;
        }
    }

    outputElement.innerHTML = "Lines : " + count;
}

function toSmall(){
    let text=inputElement.value;

    outputElement.innerHTML=text.toLowerCase();
}

function capitalise(){
    let text=inputElement.value;

    outputElement.innerHTML=text.toUpperCase();
}

function titleCase(){
    let text=inputElement.value.toLowerCase();
    let words=text.split(" ");

    for(let i=0;i<words.length;i++){
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }

    outputElement.innerHTML=words.join(" ");
}

function palindromeCheck(){
    let text=inputElement.value;
    let reverse=text.split("").reverse().join("");

    if(text===reverse){
        outputElement.innerHTML="Palindrome";
    }
    else{
        outputElement.innerHTML="Not Palindrome";
    }
}

function firstWord(){
    let text = inputElement.value;

    let pos = text.indexOf(" ");
    let word = text.slice(0, pos);

    outputElement.innerHTML = "First word : " + word;
}

function replaceSpaces(){
    let text=inputElement.value;

    outputElement.innerHTML=text.replaceAll(" ","-");
}

function reverseText(){
    let text=inputElement.value;

    outputElement.innerHTML=text.split("").reverse().join("");
}

function sortWords(){
    let text=inputElement.value;
    let words=text.split(" ");

    words.sort();

    outputElement.innerHTML=words.join(" ");
}