
// 1. The area in which the plants are contained is circular, with a radius of 5 meters.
const radius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
// 2. Each plant requires a minimum space of 0.8 square meters.
const minSpace = 0.8;
// 3. The area is starting with 20 plants.
let startPlants = 100;
// 4. The plants double in number every week.
let weeksPast = 10;

// 1. Predict the plant growth after a specific number of weeks.
let currentPlants = startPlants * (2 ** weeksPast);

// 2. Implement control flow to make decisions on whether the plants should be:
let action;
let totalSpace = (currentPlants * minSpace) / area;
let totalSpacePer = totalSpace * 100
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
try {
if (.5 > totalSpace) {
    action = 'Planted'
}
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
else if (.8 > totalSpace > .5) {
    action = 'Monitored'
}
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
else if (1 > totalSpace > .8) {
    action = 'Pruned'
}

else {
    error
}

console.log(`Weeks Past: ${weeksPast}
Total Plants: ${currentPlants}
Current % of Space Taken: ${totalSpacePer}%
Current Action: ${action}`)

} catch (error){
    console.log(`Error Not Enough Room`)

}
console.log ()