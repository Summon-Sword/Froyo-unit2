// This line ensures that the code inside the function will run after the webpage is fully loaded.
window.onload = function() {
    // Prompt the user to enter a list of froyo flavors and store their response in 'userInput'.
    let userInput = prompt("Enter a list of comma-separated froyo flavors:");

    // Check if the user entered anything (userInput is not null or empty).
    if (userInput) {
        // Call 'countFlavors' function with the user's input to get the count of each flavor.
        let flavorCounts = countFlavors(userInput);

        // Log the object containing the counts of each flavor to the console.
        console.log(flavorCounts);
    }
};

// Define the 'countFlavors' function that takes a string input and returns an object.
function countFlavors(input) {
    // Split the input string into an array of flavors based on commas.
    let flavors = input.split(',');

    // Initialize an empty object to hold the count of each flavor.
    let flavorCounts = {};

    // Iterate through each flavor in the array.
    for (let flavor of flavors) {
        // Trim whitespace from the current flavor.
        flavor = flavor.trim();

        // Check if this flavor is already in the 'flavorCounts' object.
        if (flavorCounts[flavor]) {
            // If it is, increment its count.
            flavorCounts[flavor]++;
        } else {
            // If it's not in the object, add it with a count of 1.
            flavorCounts[flavor] = 1;
        }
    }

    // Return the object containing the counts of each flavor.
    return flavorCounts;
}