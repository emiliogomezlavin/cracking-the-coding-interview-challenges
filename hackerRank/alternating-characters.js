// Shashank likes strings in which consecutive characters are different. For example, he likes ABABA, while he doesn't like ABAA. Given a string containing characters  and  only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.

// Your task is to find the minimum number of required deletions.

// Input Format

// The first line contains an integer , i.e. the number of test cases. 
// The next  lines contain a string each.

// Output Format

// For each test case, print the minimum number of deletions required.

// Constraints

 
//  length of string 

// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4
// Explanation

// AAAA  A, 3 deletions
// BBBBB  B, 4 deletions
// ABABABAB  ABABABAB, 0 deletions
// BABABA  BABABA, 0 deletions
// AAABBB  AB, 4 deletions because to convert it to AB we need to delete 2 A's and 2 B's




function processData(input) {}
    
    //    I need to check if the element before is the same or different while I loop through all my string
    //  if it's the same I increment my counter and then return the counter
    
    var testCase = input.split("\n");
    var length = testCase.length;
    var curr;
    var next;
    
    
    
    for (var i = 1; i<length; i++){        
        if (testCase[i].length < 2){
            console.log("0");
        }else {
            var count = 0;
            var curr = testCase[i][0];
            
            for(var j = 1; j<testCase[i].length; j++){
                if(curr !== testCase[i][j]){
                    curr = testCase[i][j];
                }
                else {
                    count++;
                }
            }
            console.log(count);
        }
    }
} 