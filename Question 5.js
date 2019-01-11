/*
* Checks to see if the user inputs valid amounts for their loan amount and month amount.
*
* */


var loan= prompt("You have an outstanding balance on your loan. Please enter the amount.");
var months;
var rate;


if (isNaN(loan) === false && loan!=0)   //if loan is invalid move to the comments labeled "C"
{
    months = prompt("Thank you. Please enter the number of months you would like to pay off this amount");
    if (isNaN(months) === false && months != 0) // if month is invalid move to the comments labeled "B"
    {
        rate = loan / months;
        alert("Thank you. You will pay $ " + rate + " each month for " + months + " months to clear your balance.");// outputs rate
    }

    else {  // This is "B". Will loop until a valid month is entered
        do
            {
            months = prompt("Invalid input. Please input a number")
            }
        while (isNaN(months) === true && months!=0)
        rate = loan / months;
        alert("Thank you. You will pay $ " + rate + " each month for " + months + " months to clear your balance.")  // Outputs rate
    }
}


else // This is "C". Will loop until a valid loan is entered
    {
        do {
            loan = prompt("Invalid input. Please input a number")
        }
        while (isNaN(loan) === true && loan!=0)

        months = prompt("Thank you. Please enter the number of months you would like to clear your balance");
        if (isNaN(months) == false && months!=0) // if months is invalid, move to "D"
        {
            rate = loan / months;
            alert("Thank you. You will pay $" + rate + " each month for " + months + " months to clear your balance.") //outputs rate
        }
        else //This is "D" Loops until valid months
            {
            do {
                months = prompt("Invalid input. Please input a number")
            }
            while (isNaN(months) === true && months!=0)
            rate = loan / months;
            alert("Thank you. You will pay $ " + rate + " each month for " + months + " months to clear your balance.")  //outputs rate
        }
    }
