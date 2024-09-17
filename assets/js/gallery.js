const images = [
    {
        "src": "/assets/images/aktifitas/kunjungan-presiden.webp",
        "alt": "Kunjungan presiden RI"
    },
    {
        "src": "/assets/images/aktifitas/reses-2.jpg",
        "alt": "Reses DPRD Sulsel"
    },
    {
        "src": "/assets/images/aktifitas/halal-bihalal.jpeg",
        "alt": "Halal bil halal"
    },
    {
        "src": "/assets/images/aktifitas/kunjungan-sekolah.jpg",
        "alt": "Kunjungan sekolah"
    },
    {
        "src": "/assets/images/aktifitas/sosialisasi-nilai.jpg",
        "alt": "Sosialisasi nilai kebangsaan"
    },
    {
        "src": "/assets/images/aktifitas/deklarasi-inimibarru.jpg",
        "alt": "Deklarasi inimi barru 2024"
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