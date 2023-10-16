// function fetchUserDataAndPosts(userId, userDataCallback, postsCallback, errorCallback) {
//     // Simulate asynchronous API call to fetch user data
//     setTimeout(() => {
//         const userData = { id: userId, username: 'exampleUser' };
//         userDataCallback(userData);
//
//         // Simulate asynchronous API call to fetch posts after user data is fetched
//         setTimeout(() => {
//             const posts = ['Post 1', 'Post 2', 'Post 3'];
//             postsCallback(posts);
//         }, 1000); // Simulating posts fetching taking 1 second
//     }, 1500); // Simulating user data fetching taking 1.5 seconds
// }
//
// // Example usage
// fetchUserDataAndPosts(
//     1,
//     user => {
//         console.log('User Data:', user);
//     },
//     posts => {
//         console.log('User Posts:', posts);
//     },
//     error => {
//         console.error('Error:', error);
//     }
// );
function fetchUserDataAndPosts(userId) {
    // Create a new promise for fetching user data
    return new Promise((resolve, reject) => {
        // Simulate asynchronous API call to fetch user data
        setTimeout(() => {
            const userData = { id: userId, username: 'exampleUser' };
            // Resolve the promise with the user data
            resolve(userData);
        }, 1500); // Simulating user data fetching taking 1.5 seconds
    })
        .then((userData) => {
            // Log the user data
            console.log('User Data:', userData);
            // Create a new promise for fetching posts
            return new Promise((resolve, reject) => {
                // Simulate asynchronous API call to fetch posts after user data is fetched
                setTimeout(() => {
                    const posts = ['Post 1', 'Post 2', 'Post 3'];
                    // Resolve the promise with the posts
                    resolve(posts);
                }, 1000); // Simulating posts fetching taking 1 second
            });
        })
        .then((posts) => {
            // Log the posts
            console.log('User Posts:', posts);
        })
        .catch((error) => {
            // Handle any error in the promise chain
            console.error('Error:', error);
        });
}

// Example usage
fetchUserDataAndPosts(1);


