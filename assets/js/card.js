
  const cardsData = [
    {
      "title": "Percepatan Pengentasan Kemiskinan dan Pengangguran Terbuka",
      "svg": "M13 5l7 7-7 7V5zM5 5l7 7-7 7V5z",
      "color": "#F59E0B"
    },
    {
      "title": "Pembangunan Manusia yang Unggul dan Inklusif",
      "svg": "M12 14l9-5-9-5-9 5 9 5z",
      "color": "#F59E0B"
    },
    {
      "title": "Pembangunan dan pengembangan Infrastruktur wilayah Yang Berketahanan Iklim",
      "svg": "M7.72361 0.0527864C7.58284 -0.0175955 7.41716 -0.0175955 7.27639 0.0527864L1.27639 3.05279L1.72361 3.94721L7.5 1.05902L13.2764 3.94721L13.7236 3.05279L7.72361 0.0527864Z",
      "color": "#F59E0B"
    },
    {
      "title": "Good Governance yang Bernafaskan Keagamaan",
      "svg": "M48.022 26.652c-1.396 6.519-6.192 11.874-12.516 13.976-1.94.646-3.95.973-5.975.973-8.149 0-15.354-5.19-17.93-12.914-1.595-4.781-1.229-9.896 1.03-14.404 2.259-4.507 6.141-7.867 10.93-9.46 4.505-1.496 9.397-1.246 13.71.689l.935-1.763c-6.263-3.869-14.064-4.795-21.078-2.462-6.343 2.109-11.484 6.559-14.476 12.528-2.992 5.97-3.476 12.746-1.364 19.08 3.412 10.231 12.955 17.105 23.747 17.105 2.682 0 5.343-.433 7.911-1.286 9.573-3.184 16.266-11.73 17.052-21.774l-1.976-.288zm-12.325-12.049l-5.014-9.384-2.55 10.477-10.429 2.05 9.547 5.421-1.642 10.796 8.107-7.374 10.046 4.82-5.131-10.027 8.124-7.842z",
      "color": "#F59E0B"
    },
    {
      "title": "Peningkatan Produktivitas perekonomian yang Berdaya Saing",
      "svg": "M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z",
      "color": "#F59E0B"
    }
  ];

  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid');

    cardsData.forEach(card => {
      const cardElement = document.createElement('a');
      cardElement.className = 'block rounded-xl border border-yellow-300 p-8 shadow-xl transition hover:border-yellow-500 hover:shadow-gray-500/10';
      cardElement.href = '#';

      const svgElement = document.createElement('svg');
      svgElement.className = 'size-10';
      svgElement.setAttribute('width', '30px');
      svgElement.setAttribute('height', '30px');
      svgElement.setAttribute('viewBox', '0 0 24 24');
      svgElement.setAttribute('fill', card.color);
      svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const pathElement = document.createElement('path');
      pathElement.setAttribute('d', card.svg);

      svgElement.appendChild(pathElement);

      const titleElement = document.createElement('h2');
      titleElement.className = 'mt-6 text-2xl font-bold text-gray-900';
      titleElement.textContent = card.title;

      cardElement.appendChild(svgElement);
      cardElement.appendChild(titleElement);

      container.appendChild(cardElement);
    });
  });

