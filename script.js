//your code here

function countWords(){
    let splitText = document.querySelector('#evaluatedText').value;
    let words = splitText.split(" ");
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i] !== " "){
            count++;
        }
    }
    console.log(count);
    document.querySelector("#wordCount").innerHTML = count;
}
