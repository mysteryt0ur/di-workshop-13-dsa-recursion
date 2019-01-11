function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
   }
   
   console.log(pow(5, 9))

// This function attempts to give the result from a user chosen number being multiplied by the power of another user chosen number. The function details that the user should give two individual dependencies. 

// As used in this example, the user has given 'x' the value of 2, and 'n' the value of 3. As 'n' is not equal to 1, the function will not return 2. The function then works out 2 * (2 x 2), which equals 2 * 4, which further equals 8. If you work out 2 to the power of 3, you do infact come to a figure of 8. I tested this within the command line and the correct sum does appear. 

// I also tested this function by using 'x' as 5, and by using 'n' as 9. This should have logged the number 1953125, which it did.
