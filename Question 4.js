var FTEMP = prompt(" Fahrenheit to Celcius: Please input a temperature");
var CTEMP = Math.round((FTEMP - 32) * 5 / 9);

if (isNaN(FTEMP)=== false) //Test for valid input
{
    alert(CTEMP)  //prints valid input
}

else // Forces user to enter valid input via do-while
{
    do
    {
        FTEMP = prompt("Invalid input. Please input a number")
    }
    while (isNaN(FTEMP) === true);
    CTEMP = Math.round((FTEMP - 32) * 5 / 9)// This must be entered again otherwise NaN

    alert(CTEMP) //prints

}