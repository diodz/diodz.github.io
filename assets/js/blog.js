document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/blog/posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

                const titleElement = document.createElement('h2');
                titleElement.classList.add('text-2xl', 'font-semibold', 'mb-2');
                titleElement.innerText = post.title;

                const dateElement = document.createElement('p');
                dateElement.classList.add('text-gray-600', 'mb-2');
                dateElement.innerText = new Date(post.date).toLocaleDateString();

                const excerptElement = document.createElement('p');
                excerptElement.classList.add('mb-2');
                excerptElement.innerText = post.excerpt;

                const readMoreElement = document.createElement('a');
                readMoreElement.classList.add('text-blue-600', 'hover:underline');
                readMoreElement.href = `pages/blog/${post.file}`;
                readMoreElement.innerText = 'Read more';

                postElement.appendChild(titleElement);
                postElement.appendChild(dateElement);
                postElement.appendChild(excerptElement);
                postElement.appendChild(readMoreElement);

                blogPostsContainer.appendChild(postElement);
            });
        });
});
