// Your JSON data (you can load this from a file or an API if necessary)
const dataKab = [{
    "id": 1,
    "kab": "Barru"
}]

const data = [
    {
        "id": 1,
        "kecamatan": "Tanete Riaja",
        "kelurahan": [
            { "id": 1, "nama": "Lompo Riaja" },
            { "id": 2, "nama": "Harapan" },
            { "id": 3, "nama": "Kading" },
            { "id": 4, "nama": "Lempang" },
            { "id": 5, "nama": "Libureng" },
            { "id": 6, "nama": "Lompo Tengah" },
            { "id": 7, "nama": "Mattirowalie" }
        ]
    },
    {
        "id": 2,
        "kecamatan": "Tanete Rilau",
        "kelurahan": [
            { "id": 1, "nama": "Corawali" },
            { "id": 2, "nama": "Garessi" },
            { "id": 3, "nama": "Lalabata" },
            { "id": 4, "nama": "Lasitae" },
            { "id": 5, "nama": "Lipukasi" },
            { "id": 6, "nama": "Pancana" },
            { "id": 7, "nama": "Pao-Pao" },
            { "id": 8, "nama": "Tellumpanua" },
            { "id": 9, "nama": "Lalolang" },
            { "id": 10, "nama": "Tanete" }
        ]
    },
    {
        "id": 3,
        "kecamatan": "Barru",
        "kelurahan":[
            { "id": 1, "nama": "Anabanua" },
            { "id": 2, "nama": "Galung" },
            { "id": 3, "nama": "Palakka" },
            { "id": 4, "nama": "Siawung" },
            { "id": 5, "nama": "Tompo" },
            { "id": 6, "nama": "Coppo" },
            { "id": 7, "nama": "Mangempang" },
            { "id": 8, "nama": "Sepee" },
            { "id": 9, "nama": "Sumpang Binangae" },
            { "id": 10, "nama": "Tuwung" }
        ]
    },
    {
        "id": 4,
        "kecamatan": "Soppeng Riaja",
        "kelurahan":[
            {
                "id": 1,
                "nama": "Ajakkang"
            },
            {
                "id": 2,
                "nama": "Batupute"
            },
            {
                "id": 3,
                "nama": "Lawallu"
            },
            {
                "id": 4,
                "nama": "Paccekke"
            },
            {
                "id": 5,
                "nama": "Siddo"
            },
            {
                "id": 6,
                "nama": "Kiriu-kiru"
            },
            {
                "id": 7,
                "nama": "Mangkoso"
            } 
        ]
    },
    {
        "id": 5,
        "kecamatan": "Mallusetasi",
        "kelurahan":[
            {
                "id": 1,
                "nama": "Bojo"
            },
            {
                "id": 2,
                "nama": "Cilellang"
            },
            {
                "id": 3,
                "nama": "Kupa"
            },
            {
                "id": 4,
                "nama": "Manuba"
            },
            {
                "id": 5,
                "nama": "Nepo"
            },
            {
                "id": 6,
                "nama": "Bojo Baru"
            },
            {
                "id": 7,
                "nama": "Mallawa"
            },
            {
                "id": 8,
                "nama": "Palanro"
            } 
        ]
    },
    {
        "id": 6,
        "kecamatan": "Pujananting",
        "kelurahan":[
            {
                "id": 1,
                "nama": "Bacu-Bacu"
            },
            {
                "id": 2,
                "nama": "Bulo-Bulo"
            },
            {
                "id": 3,
                "nama": "Gattareng"
            },
            {
                "id": 4,
                "nama": "Jangan-Jangan"
            },
            {
                "id": 5,
                "nama": "Pattappa"
            },
            {
                "id": 6,
                "nama": "Pujananting"
            },
            {
                "id": 7,
                "nama": "Mattappawalie"
            }
        ]
    },
    {
        "id": 7,
        "kecamatan": "Balusu",
        "kelurahan" : [
            {
                "id": 1,
                "nama": "Takkalasi"
            },
            {
                "id": 2,
                "nama": "Balusu"
            },
            {
                "id": 3,
                "nama": "Binuang"
            },
            {
                "id": 4,
                "nama": "Kamiri"
            },
            {
                "id": 5,
                "nama": "Lampoko"
            },
            {
                "id": 6,
                "nama": "Madello"
            }
        ]
    }
];

// DOM elements
const kabSelect = document.getElementById('kab');
const kecamatanSelect = document.getElementById('kecamatan');
const kelurahanSelect = document.getElementById('kelurahan');

function populateKab() {
    dataKab.forEach((kab) => {
        const option = document.createElement('option');
        option.value = kab.kab;
        option.textContent = kab.kab;
        kabSelect.appendChild(option);
    });
}
function populateKecamatan() {
    data.forEach((kecamatan) => {
        const option = document.createElement('option');
        option.value = kecamatan.id;
        option.textContent = kecamatan.kecamatan;
        kecamatanSelect.appendChild(option);
    });
}

function populateKelurahan(kecamatanId) {
    // Clear previous kelurahan options
    kelurahanSelect.innerHTML = '<option selected>Pilih Kelurahan</option>';
    
    // Find the selected kecamatan
    const selectedKecamatan = data.find(kec => kec.id === parseInt(kecamatanId));
    
    // Populate kelurahan options
    if (selectedKecamatan) {
        selectedKecamatan.kelurahan.forEach((kelurahan) => {
            const option = document.createElement('option');
            option.value = kelurahan.nama;
            option.textContent = kelurahan.nama;
            kelurahanSelect.appendChild(option);
        });
    }
}

// Event listener for kecamatan selection change
kecamatanSelect.addEventListener('change', function() {
    const kecamatanId = this.value;
    populateKelurahan(kecamatanId);
});

// Initial call to populate kecamatan on page load
document.addEventListener('DOMContentLoaded', populateKab);

window.onload = populateKecamatan;
