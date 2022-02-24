function start(){
    var number = readInt("Enter number: ");
    if(number === 1){
        number = number * 3 + 1;
        println(number);
    }
    while (number != 1){
        if (number == null){
            println("Error! Must contain a number.");
        }
        if (number <=0){ //if number is less than or equal to
            println("You can only do positive numbers!");
            break;
        }
        if (number % 2 == 0){ // if the number is even 
            number = number / 2;
            println(number);
        }else{ // if number is odd
            number = number * 3 + 1;
            println(number);
        }
    }
}
