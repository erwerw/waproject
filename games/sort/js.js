let form = document.querySelector("form");
let words = [
    "apple",
    "source",
    "code",
    "car",
    "phone"
]

let currentWord = "";

// when form submitted 
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the form
    check();
})



function loadWord(){
    currentWord = words[Math.floor(Math.random() * words.length)]
    let randomWord = [...currentWord].reverse().join(' ')
    document.querySelector("h1").innerText = randomWord;
}

function check(){
    let input = document.querySelector("input").value;
    if(input == currentWord){
        alert("Correct .!")
        form.submit() // Refresh the page
    }else{
        alert("Worng answer")
    }
}

loadWord(); // Lunch