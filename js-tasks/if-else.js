// 1. Write a JavaScript program to find the largest of three numbers entered by the user using if-else statements.
         function largest(x,y,z){
            if(x>y && x>z){
                console.log(x + " :x is the largest number");
            }
            else if(y>x && y>z){
                console.log(y + " :y is the largest number");
            }
            else{
                console.log(z + ":z is the largest number");
            }

         }
         largest(10,20,30);

// 2.  Write a JavaScript program to check whether a year is a leap year or not using if-else.
     function leap(n){
        if(n%100==0){
            if(n%400==0){
                console.log(n + " this is leap year");
            }
            else{
                console.log(n + " this is not leap year");
            }
        }
        else if(n%4==0){
            console.log(n + " this is leap year");
        }
        else{
            console.log(n + " this is not  leap year");
        }
     }
     leap(1900);

//  3. Write a JavaScript program to check whether a character entered by the user is a vowel or a consonant using if-else.
       function character(a){
          if(a=='a' || a=='e' || a=='i' || a=='o'|| a=='u' || a=='A' || a=='E'|| a=='I' || a=='O' || a=='U')
            {
                console.log(a + " is vowel ");
            }
            else{
                console.log(a + " is  consonant ");
            }
       }
       character("e");


// 4.  Write a JavaScript program to check whether a number entered by the user is positive, negative, or zero using if-else.
    function number(z){
        if(z==0){
            console.log(z + " is  zero ");
        }
        else if(z>0){
            console.log(z + " is  positive ");
        }
        else{
            console.log(z + " is  Negative ");
        }
    }
    number(10);

// 5.  Write a JavaScript program to find the grade of a student based on marks entered by the user. Use the following conditions:
//                                         Marks > 90: Grade A
//                                        Marks > 90 Grade B
//                                         Marks > 50: Grade C
//                                         Marks <= 50: Grade D

 function student(marks){
    if( marks > 90){
        console.log(marks + " : Grade A ");
    }
    else if( marks > 75){
        console.log(marks + " : Grade B ");
    }
    else if( marks > 50){
        console.log(marks + " : Grade C ");
    }
    else if( marks <= 50){
        console.log(marks + " : Grade D ");
    }

 }
 student(90);

// 6. Write a JavaScript program to check whether a given string is a palindrome using if-else statements.
 function palindrome(name){
    let org =name;
 let rev= name.split("").reverse("").join("");
 if(org==rev){
   console.log("palindron");
 }
 else{
    console.log("not palindrom");
 }
  
 }
 palindrome("java");

// 7.  Write a JavaScript program to check if a number entered by the user is divisible by both 3 and 7 using if-else.
function user(a){
    if(a%3==0 && a%7==0){
         console.log("Divisible by both 3 and 7");
    }
    else{
        console.log("Not Divisible by both 3 and 7");
    }
}
user(21);

