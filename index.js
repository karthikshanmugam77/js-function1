// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// -----------  ADD FUNCTION  --------------------

function Add( a, b)
{
  return a+b;           // return the added value
}
let result =Add(4,5);   //stores the result 
console.log("add : "+result);    // output : 9

// -----------  SUBTRACT FUNCTION  --------------------

function Subtract(a,b)
{
  return a-b;            //Subtracts the values and return
}
let result =Subtract(5,5);//stores the result 
console.log("subtract : "+result);      // output : 0

// ----------- multiplication FUNCTION  --------------------

function Multiply(a,b)
{
  return a*b;            //multiplies the values and return
}
let result =Multiply(5,5);//stores the result 
console.log("multiply : "+result);      // output : 25

// ----------- Division FUNCTION  --------------------

function Division(a,b)//Divides the values and return
{
  return a/b ;  
}
let result =Division(4,2);//stores the result 
console.log("DIV : "+result);      // output : 2

// ----------- MODULUS FUNCTION  --------------------

function Modulus(a,b)
{
  return a%b ;  ///applies modules and return values  
}
let result =Modulus(5,2);//stores the result 
console.log("MOD : "+result);      // output : 1

// ----------- POWER FUNCTION  --------------------

function Power(a,b)
{
  return Math.pow(a,b) ;  ///applies power and return values  
}
let result =Power(5,2);//stores the result 
console.log("POWer : " +result);    // output : 25

// ----------- COMPARE STRING FUNCTION  --------------------

function CompareString(str1,str2)
{
  return (str1===str2);
}
let result =CompareString("aa","aa");//stores the result 
console.log("compare-string : "+result);               // output : 

// ----------- COMPARE NUMBER FUNCTION  --------------------

function CompareNumber(num1,num2)
{
  return (num1===num2);     //checks whether two numbers are equal
}
let result =CompareNumber(5,2);//stores the result 
console.log("compare-number : "+result);

// ----------- COMPARE VALUES FUNCTION  --------------------

function CompareValues(val1,val2)
{
  return (typeof(val1)===typeof(val2))? true: false;
}
let result =CompareValues(2,3);//stores the result 
console.log("compare-values : "+result);

// ----------- GRADE FINDER FUNCTION  --------------------

function GradeFinder(mark)
{
  return (mark>50)?'fail':'pass';
}
let result =GradeFinder(4);//stores the result 
console.log("grade : "+result);//output : fail

// ----------- CHECK VOWELS FUNCTION  --------------------

function findVowels(str)
{
  if((str.match(/[aeiou]/ig)!= null))//checks for vowels in the string by matching
  {
    return true;    //returns true if condition is true
  }
  else
    return false;
}
let result =findVowels('krth');//stores the result 
console.log("vowels : " +result);  

// ----------- PRIME NUMBER FUNCTION  --------------------\

function test_prime(n) 
{

  if (n===1)  //base condition bcoz 1 is neither or nor
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++) //looping for checking prime
    {
      if(n % x === 0) // divisiblity check
      {
        return false;
      }
    }
    return true;  
  }
}

console.log("prime : "+test_prime(35));//function call





