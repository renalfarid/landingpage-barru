function toggleModal(show) {
    const modal = document.getElementById('supportModal');
    modal.classList.toggle('hidden', !show);
  }
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const kecamatanSelect = document.getElementById('kecamatan');
    const selectedOption = kecamatanSelect.options[kecamatanSelect.selectedIndex];
    const selectedKecamatan = selectedOption.textContent;

    

    const formData = new FormData(document.getElementById('supportForm'));
    let data = Object.fromEntries(formData.entries()); // Convert FormData to an object
    data.kecamatan = selectedKecamatan
    
      fetch('https://inimibarru.com/landing-api/join', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert the form data to JSON
      })
      .then(response => response.json())
      .then(data => {
      const responseSpan = document.getElementById('response');
      if (data.success) {
          responseSpan.innerText = 'Dukungan berhasil dikirim!'; // Success message
          responseSpan.style.color = 'green';
          toggleModal(false);
      } else {
          responseSpan.innerText = `Gagal: ${data.error}`; // Error message returned from server
          responseSpan.style.color = 'red';
      }
      })
      .catch((error) => {
      const responseSpan = document.getElementById('response');
      responseSpan.innerText = 'Terjadi kesalahan. Coba lagi.'; // Generic error message
      responseSpan.style.color = 'red';
      console.error('Error:', error);
      });
  }