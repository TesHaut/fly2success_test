for (let index = 1; index < 100; index++) {
    if (index % 3 == 0 && index % 5 != 0)
        console.log("Drone is the future");
    else if (index % 3 != 0 && index % 5 == 0)
        console.log("DreamJ0b");
    else if (index % 3 == 0 && index % 5 == 0)
        console.log("Fly2Success");
    else
        console.log(index);
}