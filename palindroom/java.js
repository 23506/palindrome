function palindrome(value) {
    value = value.toLowerCase();
    const charCounts = {};
    let display = "";
    for (const ch of value) {
        if (/[^a-z0-9]/.test(ch)) {
            continue;
        }
        display += ch;

        if (charCounts[ch]) {
            charCounts[ch] += 1;
        } else {
            charCounts[ch] = 1;
        }
    }
    let oddCounts = 0;
    for (const prop in charCounts) {
        if (charCounts[prop] % 2 === 1) {
            oddCounts += 1;
        }

        console.log(charCounts);
        console.log(oddCounts <= 1);
        if (oddCounts > 1 || value === "") {
            document.getElementById("textOutput").innerHTML = (display + "is geen mogelijk palindroom");
        } else {
            document.getElementById("textOutput").innerHTML = (display + "is een mogelijk palindroom");

        }

    }
}

let input = document.getElementById('input');
let answer = document.getElementById('answer');

input.onkeyup = () => {
    palindrome(input.value);
};