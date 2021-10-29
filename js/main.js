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

const generateNumber = function () {
    return Math.floor(Math.random() * 5) + 1;
};

const sumChecker = function (first, second) {
    return (first + second) % 2 === 0 ? true : false;
};

//prettier-ignore
const numberCheck = (number) => (!isNaN(number) && (parseInt(number) <= 5 && parseInt(number) > 0)) ? true : false;

const clear = (input) => (input.value = '');

buttonOddOrEven.addEventListener('click', () => {
    if (numberCheck(inputOddOrEven.value)) {
        const AI = generateNumber();
        const US = parseInt(inputOddOrEven.value);
        if (sumChecker(US, AI)) alert('The sum of the numbers is EVEN');
        else alert('The sum of the numbers is ODD');
    } else alert('Insert a value between 0 and 5');

    clear(inputOddOrEven);
});
