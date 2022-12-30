function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => display(data));
}

function display(posts) {
    for (const post of posts) {
        console.log(post);
    }

}