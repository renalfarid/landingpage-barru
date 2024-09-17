const images = [
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        "alt": "Image 1"
    },
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "alt": "Image 2"
    },
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "alt": "Image 3"
    },
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "alt": "Image 4"
    },
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "alt": "Image 5"
    },
    {
        "src": "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        "alt": "Image 6"
    }
    // Add more images here
];

// Select the gallery container
const galleryContainer = document.getElementById('gallery');

// Loop through the JSON array and render each image
images.forEach(image => {
    // Create a div for each image
    const div = document.createElement('div');
    
    // Create the img element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add('h-auto', 'max-w-full', 'rounded-lg');
    
    // Append the img to the div
    div.appendChild(img);

    // Append the div to the gallery container
    galleryContainer.appendChild(div);
});