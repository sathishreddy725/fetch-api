// Function to fetch posts from API
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Function to display posts on the webpage
async function displayPosts() {
    const posts = await fetchPosts();
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to fetch todos from API
async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
}

// Function to display todos on the webpage
async function displayTodos() {
    const todos = await fetchTodos();
    const todosContainer = document.getElementById('todos-container');
    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled>
            <p>${todo.title}</p>
        `;
        todosContainer.appendChild(todoElement);
    });
}

// Display posts and todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    displayTodos();
});