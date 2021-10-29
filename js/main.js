// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const input = document.getElementById('p-001');
const button = document.getElementById('b-001');

input.value = '';

const isPalindrome = function (string) {
    let increment = 0;
    let decrement = string.length - 1;
    while (increment < decrement) {
        if (string[increment] != string[decrement]) {
            return false;
        }
        increment++;
        decrement--;
    }
    return true;
};

button.addEventListener('click', () => {
    let word = '';
    if (!isNaN(input.value)) {
        alert('Only string is allowed');
        return;
    }
    word = input.value;

    if (isPalindrome(word)) {
        alert('The inserted word is palindrome');
    } else {
        alert('The inserted word is NOT palindrome');
    }
    input.value = '';
});

console.log('js here');
