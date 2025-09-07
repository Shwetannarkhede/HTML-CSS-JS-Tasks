//   TASKS USING LOOPS

// 1. Write a JavaScript program to print the first 10 natural numbers using a while loop.

function natural(){
let a=1;
while(a<=10){
    console.log(a);
    a++;
}
}



// 2.Write a JavaScript program to calculate the sum of all numbers from 1 to 100 using a for loop.

function sum(){
let sum=0;
for(let i=1 ; i<=100;i++){
    sum=sum+i;
}
console.log("sum of 1 to 100 : " + sum);
}


// 3.Write a JavaScript program to print all even numbers between 1 and 50 using a for loop.

function even(){
    for(let i=1;i<=50;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}


// 4.Write a JavaScript program to find the factorial of a number entered by the user using a while loop.
 function factorial(a){
//   let a=4;
  let res=1;
  while(a!=0){
     res=a*res;
     a--;
   }
   console.log(res);
 }
 

// 5. Write a JavaScript program to reverse a number using a while loop.

function reverse(){
    let a=123;
    let rev=0;
    while(a!=0){
       let dig=a%10;
       rev=rev*10+dig;
        a=Math.floor(a/10) ;
    }
    console.log("Reversed nummber : " + rev)
}


// 6. Write a JavaScript program to print the Fibonacci series up to a certain number entered by the user using a for loop.

function Fibonacci(n){
let a=0;
let b=1;
console.log(a);
console.log(b);

for(let i=0;i<=n;i++){
    let c=a+b;
    if(c>n){
        break 
    }
    console.log(c);
    a=b;
    b=c;

}

}


//7. Write a JavaScript program to check whether a number is prime or not using a for loop.

function prime(a){
 while(a<=1){
   return true;
 }
 let itprime = true;
  for(let i=2;i< a;i++){
        if(a%i==0){
           itprime = false;
        }
    }

    if(itprime){
        console.log(" prime number");
    }
    else{
        console.log("not prime number");
    }
};

// 8. Write a JavaScript program to count the number of digits in a given number using a while loop.
    function digits(i){
        let count =0;
        
        while(i>0){
            count++;
            i=Math.floor(i/10);
        }
        console.log(count);
        
    }
   

//  9. Write a JavaScript program to calculate the power of a number using a for loop.

 function power(base,exponent){
    let res=1;
    for(let i=1;i<=exponent;i++){
      res= res*base;
    }
    console.log(res);

 }

    

//  10.Write a JavaScript program that prints all prime numbers between 1 and 100 using nested for loops.

function nested(){
  
    for(let i=2;i<= 100;i++){
       let iprime=true;
      for(let  j= 2; j<i;j++ ){
        if(i%j==0){
          iprime=false;
          break;
        }
       
      }
      if(iprime){
        console.log(i);
    }
    }
    
}

//natural()
//sum();
//even();
//factorial(4);
//reverse();
//Fibonacci(6);
//prime(4)
 //digits(123);
 // power(2,3);
// nested();