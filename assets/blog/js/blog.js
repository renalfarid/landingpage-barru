document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/blog/posts.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('relative', 'overflow-hidden', 'rounded-lg', 'shadow', 'transition', 'hover:shadow-lg');

                postElement.innerHTML = `
                    <img
                        alt="${post.title}"
                        src="${post.thumbnail}"
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                    <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div class="p-4 sm:p-6">
                            <time datetime="${post.date}" class="block text-xs text-white/90">${new Date(post.date).toLocaleDateString()}</time>
                            <a href="/blog/index.html?post=${post.slug}">
                                <h3 class="mt-0.5 text-lg text-white">${post.title}</h3>
                            </a>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                ${post.description}
                            </p>
                        </div>
                    </div>
                `;

                blogList.appendChild(postElement);
            });
        });
});
