# Workshop: Recursion 🔄

As with previous workships, you should fork this repo and then complete the bold questions below.

**Remember, it's about exploration and understanding. Take your time! Don't move on until you fully understand what's happening.**

To run these algorithms, you'll need to create a new js file for each and then run them with Node, just like you have for previous workshops...

```shell
# 1. Create the file
touch factorial.js

# 2. Add some code.

# 3. Run the file with node.
node factorial.js
```

🚨 Remember to **commit** regularly as you write code and answer the questions.

## Part 1 - Recursive Algorithms

For **each** of the algorithms below:

1. Verify its correctness/operation.
2. Try some different inputs.
3. Try to undersand how it works.


### Factorial

```js
//recursive
var factorial = function(n) {
   if(n == 0) {
       return 1
   } else {
       return n * factorial(n - 1);
   }
}
console.log(factorial(6));
```

### Countdown

```js
var countdown = function(value) {
   if (value > 0) {
       console.log(value);
       return countdown(value - 1);
   } else {
       return value;
   }
};

countdown(10);
```

### Power

```js
function pow(x, n) {
 if (n == 1) {
   return x;
 } else {
   return x * pow(x, n - 1);
 }
}

console.log(pow(2, 3))
```

### Fibonacci

```js
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

console.log(fibonacci(10));
```

## Part 2 - Handshake Game


#### Question 1
**Implement** the handshake problem **recursively** and test it with different inputs.

#### Question 2

When you cut a pizza, you cut along a diameter of the pizza. Let `Pizza(n)` be the number of slices of pizza that exist after you have made n cuts, where `n ≥ 1`.

For example, `pizza(2) = 4` because there are four slices after two diagonal cuts.

**Write a recursive method `pizza(n)` to return the number of slices and verify the correctness of your method when the pizza is cut 4 times.**

## Part 3 - Testing (Extension)

Write some unit tests to cover the functions you wrote in this workshop.
