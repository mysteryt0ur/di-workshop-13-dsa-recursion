var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
 }
 console.log(factorial(14));

// this function attempts to recieve the factorial figure of whatever 'n' is. A factorial takes into account the number itself, and then multiplies the number by itself minus 1. This continues until the last figure is multiplied by one and then you are left with your factorial value. 

//So for example, the 'n' in this instance is a 6. This means that the system will be completing the sum:
//6 x 5 x 4 x 3 x 2 x 1
//This should equal 720. After testing this in node, I have found this to be true. 

//I also tested this function by using 14 as a substituate for 'n.' This means the sum being taken place by the function was:
//14 x 13 x 12 x 11 x 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1
//This equals the sum 87178291200 and this was also shown within the log.
