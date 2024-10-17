// Question No. 1 - Add two Numbers.
function AddTwoNumbers(){
    let A = 5;
    let B = 2;
    let Sum = A + B;
    console.log(Sum);
}
AddTwoNumbers();

// Question No. 2 - Conditions Obeyed?
function Is_Valid(){
    let A = 5;
    let B = 3;
    if(A < 10 && A > B){
        console.log("true");
    }else{
        console.log("false");
    }
}
Is_Valid();

// Question No. 3 - Checking Conditions
function Check(){
    let A = 12;
    let B = 20;
    if(A % 10 == 0 || B % 10 == 0){
        console.log("true");
    }else{
        console.log("false");
    }
}
Check();

// Question No. 4 - first digit of 4 digit numbers
function First_Digit(){
    let N = "4567";
    console.log(N[0]);
}
First_Digit();

// Question No. 5 - last digit of 4 digit Number
function Last_Digit(){
    let N = "4567";
    console.log(N[3]);
}
Last_Digit();

// Question No. 6 - Remainder
function Find_the_remainder(){
    let A = 2;
    let B = 9;
    let Rem = B % A;
    console.log(Rem);
}
Find_the_remainder();

// Question No. 7 - Multiply two Numbers
function Multiply_two_number(){
    let A = 2;
    let B = 5;
    let Mul = A * B;
    console.log(Mul);
}
Multiply_two_number();

// // Question No. 8 - Marks Calculator
function Sum(){
    let Maths = 50;
    let Java = 20;
    let JavaScript = 100;
    let Sum = Maths + Java + JavaScript;
    console.log(Sum);
}
Sum();
function Average(){
    let Maths = 50;
    let Java = 20;
    let JavaScript = 100;
    let Sum = Maths + Java + JavaScript;
    let Average = Sum/3;
    console.log(Average);
}
Average();