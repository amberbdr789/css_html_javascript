
const alphabet = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n','o','p','q',
'r','s','t','u','v','w','x','y','z',];
const btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(alphabet[randomNumber]);  
    
    document.querySelector('.alphabet').innerHTML = alphabet[randomNumber];
    
});

function getRandomNumber () {
    return Math.floor(Math.random() * alphabet.length);
}



 