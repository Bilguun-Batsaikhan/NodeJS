function performTask(callback) {
    console.log("Task started");
    setTimeout(function() {
        console.log("Task completed");
        callback(); // This calls the callback function after the task is completed.
    }, 2000); // Simulating a task that takes 2 seconds to complete
}

function handleCompletion() {
    console.log("Callback function called after task completion");
}

performTask(handleCompletion);

//The following code is without callback function, try to run it to see the effect.

// function performTask() {
//     console.log("Task started");
//     setTimeout(function() {
//         console.log("Task completed");
//     }, 2000); // Simulating a task that takes 2 seconds to complete
// }
//
// function handleCompletion() {
//     console.log("Callback function called after task completion");
// }
//
// performTask();
// handleCompletion();