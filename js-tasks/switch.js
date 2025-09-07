// Switch Case 
//  Write a JavaScript program that takes a number from 1 to 12 and prints the corresponding month using a switch statement.
    function month(m){
			switch(m) 
            {
			  case 1: console.log('jan');break;
			  case 2: console.log('feb');break;
			  case 3: console.log('mar');break;
			  case 4: console.log('apr');break;
			  case 5:console.log('may');break;
			  case 6: console.log('june');break;
			  case 7: console.log('july');break;
			  case 8: console.log('aug');break;
			  case 9: console.log('sep'); break;
              case 10: console.log('oct');break;
              case 11:console.log('nov');break;
              case 12:console.log('dec');break;
			  break;
			}
		}
        month(6);

//  Write a JavaScript program to perform basic arithmetic operations (addition, subtraction, multiplication, division) based on the user's choice using a switch         
//      statement. 
   function operations(p)
   {
    let a=4;
    let b=4;

    switch(p){
        case 1: console.log(a+b);break;
		case 2: console.log(a-b);break;
		case 3: console.log(a*b);break;
		case 4: console.log(a/b);break;
	}
  }
  operations(3);

 //   Write a JavaScript program that takes a grade (A, B, C, D, F) as input and prints a description using a switch statement:
//                                          A: Excellent
 //                                          B: Good
 //                                          C: Average
 //                                          D: Poor
 //                                          F: Fail

 function grade(g){
    switch(g){
        case 'A': console.log('Excellent');break;
		case 'B': console.log('Good');break;
		case 'C': console.log('Average');break;
		case 'D': console.log( 'Poor');break;
        case 'F': console.log('Fail');break;

    }

 }
 grade('A');