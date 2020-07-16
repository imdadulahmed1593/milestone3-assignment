// feetToMile

function feetToMile(feet) {
    if (feet < 0) {
        return "'distance can not be negative'";
    } else {
        var mile = feet / 5280;

    }
    return mile;
}
var result = feetToMile(5280);
console.log("The conversion result is " + result + " miles.")




// woodCalculator

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "'number of wooden things can't be negative'";
    } else {
        var total = chair * 1 + table * 3 + bed * 5;
        return total;
    }
}
var result2 = woodCalculator(2, 3, 5);
console.log("You'll need " + result2 + " cubic feet of wood");





// brickcalculator

function brickCalculator(floor) {
    var brick = 0;
    if (floor < 0) {
        return "'number of floors can't be negative.'";

    } else if (floor <= 10) {
        brick = floor * 15 * 1000;
    } else if (floor <= 20) {
        brick = (10 * 15 + (floor - 10) * 12) * 1000;
    } else {
        brick = (10 * 15 + 10 * 12 + (floor - 20) * 10) * 1000;
    }
    return brick;
}
var result3 = brickCalculator(40);
console.log("You'll need " + result3 + " bricks.");






// tinyFriend

function tinyFriend(arr) {

    if (arr === []) {
        return "Don't you have any friends? please insert some names!";
    } else {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            var name = arr[i];
            if (name.length < min.length) {
                min = name;
            }
        }
    }
    return min;

}
var friends = ["navid", "opu", "zobayer", "Shahriaz"];
var result4 = tinyFriend(friends);
console.log("Your friend with tiniest name is " + result4);