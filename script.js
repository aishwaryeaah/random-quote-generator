const quotetext = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
instaBtn = document.querySelector(".insta");

function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quotetext.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quotetext.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

quoteBtn.addEventListener("click", randomQuote);