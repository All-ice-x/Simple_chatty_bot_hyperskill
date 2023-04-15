const input = require('sync-input');


function greet(botName, birthYear) {
    console.log(`Hello! My name is ${botName}.`);
    console.log(`I was created in ${birthYear}.`);
}

function remindName() {
    console.log("Please, remind me your name.");
    let name = input();
    console.log(`What a great name you have, ${name}!`);
}

function guessAge() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(input());
    let rem5 = Number(input());
    let rem7 = Number(input());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log(`Your age is ${age}; that's a good time to start programming!`);
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(input());
    let current = 0;

    while (current <= number) {
        console.log(`${current}!`);
        current += 1;
    }
}

function test() {
    console.log("Let's test your programming knowledge.");
    console.log("Which operator can you use to find out the type of data?");
    console.log("1. number");
    console.log("2. typeof");
    console.log("3. string");
    console.log("4. typeoff");

    let answer = Number(input());
    while (answer !== 2) {
        console.log("Please, try again.");
        answer = Number(input());
    }
}

function end() {
    console.log("Congratulations, have a nice day!");
}


greet('Little Helper', '2023');
remindName();
guessAge();
count();
test();
end();

