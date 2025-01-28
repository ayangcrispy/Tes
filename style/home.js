const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img;

// Slider untuk mengatur lebar
const widthSlider = document.getElementById('width-slider');
const widthValue = document.getElementById('width-value');
const heightValue = document.getElementById('height-value');
const decreaseButton = document.getElementById('decrease-button');
const increaseButton = document.getElementById('increase-button');

const ratio = 0.4350453172; // Rasio height terhadap width

// Fungsi untuk memperbarui nilai width dan height
function updateValues() {
    const width = parseFloat(widthSlider.value);
    const height = Math.round(width * ratio); // Menggunakan perkalian untuk menghitung tinggi
    
    widthValue.textContent = width;
    heightValue.textContent = height;
}

// Event listener untuk slider
widthSlider.addEventListener('input', updateValues);

// Event listener untuk tombol kurang
decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider.value);
    if (currentValue > parseInt(widthSlider.min)) {
        currentValue -= 10; // Mengurangi lebar sebesar 10
        widthSlider.value = currentValue; // Set nilai slider
        updateValues(); // Update tampilan nilai
    }
});

// Event listener untuk tombol tambah
increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider.value);
    if (currentValue < parseInt(widthSlider.max)) {
        currentValue += 10; // Menambah lebar sebesar 10
        widthSlider.value = currentValue; // Set nilai slider
        updateValues(); // Update tampilan nilai
    }
});

// Inisialisasi nilai awal
updateValues();

// Fungsi untuk memuat gambar ke kanvas dan menampilkan potongan
upload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img = new Image();
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas sebelum menggambar
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Gambar gambar ke canvas
                canvas.style.display = 'none'; // Tampilkan canvas setelah gambar dimuat

                // Kosongkan download-container sebelum menampilkan potongan baru
                document.getElementById('download-container').innerHTML = '';
                
                cropAndDisplayImages(); // Menampilkan semua hasil potongan sekaligus setelah gambar dimuat
            }
            img.src = event.target.result; // Set sumber gambar
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});

// Fungsi untuk memotong gambar berdasarkan posisi tombol yang ditekan dan menampilkannya
function cropAndDisplayImages() {
    const cropPositions = [
        { xOffset: 0, buttonIndex: 0 }, // Crop kiri atas
        { xOffset: (canvas.width - (canvas.height * 4) / 5) / 2, buttonIndex: 1 }, // Crop tengah atas
        { xOffset: canvas.width - (canvas.height * 4) / 5, buttonIndex: 2 } // Crop kanan atas
    ];

    cropPositions.forEach(({ xOffset, buttonIndex }) => {
        const width = (canvas.height * 4) / 5; // Rasio 4:5
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = canvas.height;
        const croppedCtx = croppedCanvas.getContext('2d');

        croppedCtx.drawImage(canvas, xOffset, 0, width, canvas.height, 0, 0, width, canvas.height);

        const imgElement = document.createElement('img');
        imgElement.src = croppedCanvas.toDataURL();
        imgElement.alt = `Crop ${buttonIndex + 1}`;
        imgElement.style.width = '100px'; // Atur lebar gambar hasil potongan
        imgElement.style.marginRight = '10px'; // Tambahkan margin antar gambar

        // Menambahkan event listener untuk mengunduh gambar saat disentuh
        imgElement.addEventListener('click', () => {
            downloadImage(croppedCanvas.toDataURL(), `crop-${buttonIndex + 1}.png`);
        });

        document.getElementById('download-container').appendChild(imgElement);
    });
}

// Fungsi untuk mengunduh gambar
function downloadImage(imageSrc, fileName) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


