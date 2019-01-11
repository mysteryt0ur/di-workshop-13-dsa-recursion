var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
 };
 
 countdown(10);

// This function does what it says on the tin. Depending on what value is given, the function will count down and log each individual figure that is 1 integer smaller than the predecesing value. This continues in a list-type fashion until the number 1 is printed, then the list reaches an end. 

// So within the example given, the value is 10. This means that the list that should be printed within the command line is:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// After checking this, I can see this to be correct. 