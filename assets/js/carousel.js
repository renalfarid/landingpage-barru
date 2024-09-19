
  document.addEventListener('DOMContentLoaded', function () {
    const carouselItemsContainer = document.getElementById('carousel-items');
    const carouselIndicatorsContainer = document.getElementById('carousel-indicators');

    // JSON data
    const carouselData = [
      {
        "srcDesktop": "./assets/images/banner-1.png",
        "srcMobile": "./assets/images/banner-768.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/banner-1.png",
        "srcMobile": "./assets/images/banner-768.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/banner-1.png",
        "srcMobile": "./assets/images/banner-768.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/banner-1.png",
        "srcMobile": "./assets/images/banner-768.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/banner-1.png",
        "srcMobile": "./assets/images/banner-768.png",
        "alt": "inimi barru 2024"
      }
    ];

    // Function to update carousel items based on window size
    function updateCarouselItems() {
      // Clear existing carousel items
      carouselItemsContainer.innerHTML = '';

      // Generate carousel items
      carouselData.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('hidden', 'duration-700', 'ease-in-out');
        if (index === 0) carouselItem.classList.add('block'); // Show the first item initially
        carouselItem.setAttribute('data-carousel-item', '');

        // Check if the screen width is less than or equal to 1024px (tablet/mobile view)
        const imageSrc = window.innerWidth <= 1024 ? item.srcMobile : item.srcDesktop;

        carouselItem.innerHTML = `<img src="${imageSrc}" class="w-full h-full object-cover" alt="${item.alt}">`;
        carouselItemsContainer.appendChild(carouselItem);

        // Generate indicators
      const indicator = document.createElement('button');
      indicator.classList.add('w-3', 'h-3', 'rounded-full');
      indicator.setAttribute('aria-current', index === 0 ? 'true' : 'false');
      indicator.setAttribute('aria-label', `Slide ${index + 1}`);
      indicator.setAttribute('data-carousel-slide-to', index);
      carouselIndicatorsContainer.appendChild(indicator);
      });
    }

    // Call the function initially to load the correct images
    updateCarouselItems();

    // Add an event listener to update the carousel when the window is resized
    window.addEventListener('resize', updateCarouselItems);

    // Add event listeners for carousel controls (not shown here, but you would add functionality to the "Previous" and "Next" buttons)

  });
