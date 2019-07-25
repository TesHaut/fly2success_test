var my_lights = new Array(101).fill(false);
for (let index = 1; index < my_lights.length; index++) {
    for (let i = index; i < my_lights.length; i += index) {
        my_lights[i] = !my_lights[i];
    }
}
let count_lights = 0;
for (let y = 0; y < my_lights.length; y++) {
    if (my_lights[y])
        count_lights += 1;
}
console.log(count_lights);