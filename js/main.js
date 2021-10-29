// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const inputPalindrome = document.getElementById('p-001');
const buttonPalindrome = document.getElementById('b-001');

inputPalindrome.value = '';

const isPalindrome = function (string) {
    let increment = 0;
    let decrement = string.length - 1;
    while (increment < decrement) {
        if (string[increment] != string[decrement]) return false;
        increment++;
        decrement--;
    }
    return true;
};

buttonPalindrome.addEventListener('click', () => {
    if (!isNaN(inputPalindrome.value)) {
        alert('Only string is allowed');
        return;
    }
    if (isPalindrome(inputPalindrome.value)) alert('The inserted word is palindrome');
    else alert('The inserted word is NOT palindrome');

    inputPalindrome.value = '';
});

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const inputOddOrEven = document.getElementById('p-002');
const buttonOddOrEven = document.getElementById('b-002');
