function fibonacci(num) {
    if (num <= 2) {
        switch (num) {
            case 1: case 2: return 1;
            case 0: return 0;
            default: throw new Error("Please insert a positive integer");
        }
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(14));

// This function attempts to display to the user a number within the fibonnaci sequence that falls within the order that they specifiy. For example, the figure given in the example is a 3, meaning that the function should log the 3rd fibonacci number within the sequence.

//To test this, the 3rd fibonnaci number is 2. When trialing this through the command line, 2 is shown. I also tried this using '14' as the numberv value, and the log displayed 377 just as it should do. 