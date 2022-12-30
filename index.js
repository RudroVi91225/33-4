function loadbtn() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => displayUser(data));
}
function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUser(data));
}
const ul = document.getElementById('user');
function displayUser(data) {
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `Name; ${user.name}  Email;${user.email}`
        ul.appendChild(li);
    }

}