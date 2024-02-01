const url = "https://api.quotable.io/quotes/random";

let str,sta;

const Newq = document.querySelector('.newq');
const quote = document.querySelector('.quote');
const author = document.querySelector('#author');
const tweet = document.querySelector('.twit');
let getQuote = function () {
    fetch("https://api.quotable.io/quotes/random")
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            str = data[0].content;
            sta = data[0].author;
        })

    if (str == undefined) {
        quote.innerHTML = "Friends are more dangerous than enemies";
        author.innerHTML = "Sobhit Sinha"
    } else {
        quote.innerHTML = str;
        author.innerHTML = sta;
    }
}

const twitter = function(){
    const url1 = `https://twitter.com/intent/tweet?text=${quote.innerHTML} -- ${author.innerHTML}`;
    window.open(url1);

}

Newq.addEventListener('click', getQuote);
tweet.addEventListener('click',twitter);
