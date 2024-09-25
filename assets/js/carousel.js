
  document.addEventListener('DOMContentLoaded', function () {
    const carouselItemsContainer = document.getElementById('carousel-items');
    const carouselIndicatorsContainer = document.getElementById('carousel-indicators');

    // JSON data
    const carouselData = [
      {
        "srcDesktop": "./assets/images/slider/slider273.png",
        "srcMobile": "./assets/images/slider/mobile-1420.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/slider/slider-2273.png",
        "srcMobile": "./assets/images/slider/mobile-2420.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/slider/slider-3273.png",
        "srcMobile": "./assets/images/slider/mobile-3420.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/slider/slider-4273.png",
        "srcMobile": "./assets/images/slider/mobile-4420.png",
        "alt": "inimi barru 2024"
      },
      {
        "srcDesktop": "./assets/images/slider/slider-5273.png",
        "srcMobile": "./assets/images/slider/mobile-5420.png",
        "alt": "inimi barru 2024"
      }
    ];
    

    // Generate carousel items
    carouselData.forEach((item, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('hidden', 'duration-700', 'ease-in-out');
      if (index === 0) carouselItem.classList.add('block'); // Show the first item initially
      carouselItem.setAttribute('data-carousel-item', '');

      // Cek jika layar adalah mobile (lebar kurang dari 768px)
      const imageSrc = (window.innerWidth <= 1024 ? item.srcMobile : item.srcDesktop) + '?v=' + new Date().getTime();

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

    // Add event listeners for carousel controls (not shown here, but you would add functionality to the "Previous" and "Next" buttons)

  });
