const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.getElementById("userInput");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const wordForm = document.getElementById("wordForm");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
};

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
};

wordForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    checkWord();
});

refreshBtn.addEventListener("click", function (event) {
    event.preventDefault();
    initGame();
});

initGame();
