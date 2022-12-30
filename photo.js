function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhoto(data));
}
function showPhoto(posts) {
    const loadData = document.getElementById('photos');
    for (const post of posts) {
        const img = document.createElement('img');
        img.classList.add('post');
        img.src = `${post.url}`;
        loadData.appendChild(img);

        console.log(post);
    }
}