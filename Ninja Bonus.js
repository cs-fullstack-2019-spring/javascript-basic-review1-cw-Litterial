/*
This problems checks numbers divisible by 3 and 5 with numbers ranging between 1-100
 */

var num = parseInt(prompt("Please input an integer for your maximum value"));
if (Number.isInteger(num) === true)
{
    for (i=1;i<=num; i++)
    {
        if (i%3===0 && i%5===0)
            console.log(i+ " FIZZBUZZ");

        else if (i%3===0)
            console.log(i+ " FIZZ");

        else if (i%5===0)
            console.log(i+ " BUZZ");
        else
            console.log(i);
    }

}



else
{
    do
    {
        num = parseInt(prompt("Invalid. Please input an integer for your maximum value"))
    }
    while((Number.isInteger(num) === false));
    for (i=1;i<=num; i++)
    {
        if (i%3===0 && i%5===0)
            console.log(i+ " FIZZBUZZ");

        else if (i%3===0)
            console.log(i+ " FIZZ");

        else if (i%5===0)
            console.log(i+ " BUZZ");
        else
            console.log(i);
    }

}