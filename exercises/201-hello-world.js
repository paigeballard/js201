// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Example: hello('Mustache') should return 'Hello, Mustache!'
<<<<<<< HEAD

function hello(name) {
    let greeting = "Hello, ";
    return greeting + name + "!";
}
hello("Mustache");
=======
// Hey Flex Class, it'd s Patrick
// Great question

>>>>>>> 091d340ac9b6687cea0c6e02a6c015c827bed7d2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.
function helloDefault(name) {
    let greeting = "Hello, ";

    if (name === "") {
        return "Hello, world!"
    } else {
        return greeting + name + "!";
    }
}
