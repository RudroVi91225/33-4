function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => display(data));
}

function display(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h1>${post.id} </h1>
        <h3>${post.title}</h3>
        <p>${post.body}</p> `;
        postContainer.appendChild(div);
        console.log(post);
    }

}