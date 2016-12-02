var str = "R8, R4, R4, R8"

var input = str.split(", ")
var parsedInput = [];
var myCurrentLocation = { x: 0, y: 0, heading: "NORTH" };
var block = 0;

input.forEach(function (instruction) {
    var direction = instruction.charAt(0);
    var distance = parseInt(instruction.substr(1));
    var parsed = { direction, distance };

    parsedInput.push(parsed);
})


function move(DIRECTION, DISTANCE, HEADING) {
    switch (HEADING) {
        case "NORTH":
            if (DIRECTION === "L") {
                myCurrentLocation.x -= DISTANCE;
                myCurrentLocation.heading = "WEST";
            } else {
                myCurrentLocation.x += DISTANCE;
                myCurrentLocation.heading = "EAST";
            }
            break;

        case "SOUTH":
            if (DIRECTION === "L") {
                myCurrentLocation.x += DISTANCE;
                myCurrentLocation.heading = "EAST";
            } else {
                myCurrentLocation.x -= DISTANCE;
                myCurrentLocation.heading = "WEST";
            }
            break;

        case "EAST":
            if (DIRECTION === "L") {
                myCurrentLocation.y += DISTANCE;
                myCurrentLocation.heading = "NORTH";
            } else {
                myCurrentLocation.y -= DISTANCE;
                myCurrentLocation.heading = "SOUTH"
            }
            break;

        case "WEST":
            if (DIRECTION === "L") {
                myCurrentLocation.y -= DISTANCE;
                myCurrentLocation.heading = "SOUTH";
            } else {
                myCurrentLocation.y += DISTANCE;
                myCurrentLocation.heading = "NORTH"
            }
            break;
    }
}

parsedInput.forEach(function (instruction) {
    move(instruction.direction, instruction.distance, myCurrentLocation.heading);
    //console.log(myCurrentLocation.x, myCurrentLocation.y);
});

function finalDistance() {

    return Math.abs(myCurrentLocation.x) + Math.abs(myCurrentLocation.y)
}

console.log(parsedInput);
console.log(myCurrentLocation, finalDistance());