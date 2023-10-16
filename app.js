async function fetchUserDataAndPosts(userId) {
    try {
        const userData = await fetchUserData(userId);
        const userPosts = await fetchUserPosts();
        console.log(userData)
        console.log(userPosts)
    } catch (err) {
        console.log(err)
    }
}

// Example usage
fetchUserDataAndPosts(1);

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: userId, username: 'exampleUser' };
            // Resolve the promise with the user data
            resolve(userData);
            reject("Couldn't fetch user data")
        }, 1500); // Simulating user data fetching taking 1.5 seconds
    })
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            // Resolve the promise with the posts
            resolve(posts);
            reject("Couldn't fetch user posts")
        }, 1000); // Simulating posts fetching taking 1 second
    })
}