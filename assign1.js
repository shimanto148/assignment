var fortuneArray = ['You Are Boss', 'Good Morning', 'Have A Good Day','life is beautifull'];
var rand = fortuneArray[Math.floor(Math.random() *fortuneArray.length)];

function showquote(){
    document.getElementById('quote').innerHTML = rand;
}
showquote();