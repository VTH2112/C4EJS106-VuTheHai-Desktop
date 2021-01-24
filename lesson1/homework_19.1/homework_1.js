/*__________________________________________________________________________________________________________________________________________________________________*/
/*_________________________EX_1_________________________*/

//Ex_1a|

    /* 3 different examples of invalid variable names */

    /*1*/
        // let message = "This";
        // let message = "That";
        // SyntaxError: 'message' has already been declared

    /*2*/
        // let 2 ;
        // SyntaxError: 'message' Unexpected number

    /*3*/
        // let %a = "name" ; 
        // SyntaxError: 'message' Invalid left-hand side in assignment
/*______________________________________________________*/

//Ex_1b|

    /*In JavaScript, how to check a variable data types? */

         // Use typeOf(); funtion to check a variable data types !

/*_________________________EX_2_________________________*/
   
         /*1-b , 2-a , 3-e , 4-c,d */

/*_________________________EX_3_________________________*/


let message = "Coding is great";

    console.log(message);

let studentCount = 0;

    console.log(studentCount);

/*_________________________EX_4_________________________*/

message = "Coding might not be easy, but still great";

    console.log(message);

studentCount = 16;

    console.log(studentCount);

    console.log(message.toLowerCase());

studentCount++;

    console.log(studentCount);

/*_________________________EX_5_________________________*/

alert("You look so beautiful today !");

/*_________________________EX_6_________________________*/

let name = prompt("Hi there, enter your name here !");

    alert(`Hi ${name} , have a nice day !`);

/*_________________________EX_7_________________________*/

let firstname = prompt("Enter your first name");
let lastname  = prompt("Enter your last name");

    alert(`Hi ${lastname} ${firstname} `);

/*_________________________EX_8_________________________*/

let length = prompt("Enter size length of the square");

    alert("The square area is : " + Math.pow(length,2));

/*_________________________EX_9_________________________*/

let radius = prompt("Enter the radius of the circle");

    alert("The circle area is : " + Math.pow(radius,2)*3.14);

/*_________________________EX_9_________________________*/

let celsius = prompt("Enter the temperature in Celsius");

    alert("Celsius ( ℃ ) into Fahrenheit ( ℉ ) : " +celsius + " ( ℃ ) = " + ((celsius* 1.8000)+ 32.00) +" ( ℉ )");


/*__________________________________________________________________________________________________________________________________________________________________*/