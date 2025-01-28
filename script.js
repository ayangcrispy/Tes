
const upload1 = document.getElementById('upload-1');
const canvas1 = document.getElementById('canvas-1');
const ctx1 = canvas1.getContext('2d');
let img1;

const widthSlider1 = document.getElementById('width-slider-1');
const widthValue1 = document.getElementById('width-value-1');
const heightValue1 = document.getElementById('height-value-1');
const decreaseButton1 = document.getElementById('decrease-button-1');
const increaseButton1 = document.getElementById('increase-button-1');

const ratio1 = 0.4350453172; // Rasio height terhadap width

// Fungsi untuk memperbarui nilai width dan height
function updateValues1() {
    const width = parseFloat(widthSlider1.value);
    const height = Math.round(width * ratio1); // Menggunakan perkalian untuk menghitung tinggi
    
    widthValue1.textContent = width;
    heightValue1.textContent = height;
}

// Event listener untuk slider
widthSlider1.addEventListener('input', updateValues1);

// Event listener untuk tombol kurang
decreaseButton1.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider1.value);
    if (currentValue > parseInt(widthSlider1.min)) {
        currentValue -= 10; // Mengurangi lebar sebesar 10
        widthSlider1.value = currentValue; // Set nilai slider
        updateValues1(); // Update tampilan nilai
    }
});

// Event listener untuk tombol tambah
increaseButton1.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider1.value);
    if (currentValue < parseInt(widthSlider1.max)) {
        currentValue += 10; // Menambah lebar sebesar 10
        widthSlider1.value = currentValue; // Set nilai slider
        updateValues1(); // Update tampilan nilai
    }
});

// Inisialisasi nilai awal
updateValues1();

// Fungsi untuk memuat gambar ke kanvas dan menampilkan potongan
upload1.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img1 = new Image();
            img1.onload = function() {
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height); // Bersihkan canvas sebelum menggambar
                ctx1.drawImage(img1, 0, 0, canvas1.width, canvas1.height); // Gambar gambar ke canvas
                canvas1.style.display = 'none'; // Tampilkan canvas setelah gambar dimuat

                // Kosongkan download-container sebelum menampilkan potongan baru
                document.getElementById('download-container-1').innerHTML = '';
                
                cropAndDisplayImages1(); // Menampilkan semua hasil potongan sekaligus setelah gambar dimuat
            }
            img1.src = event.target.result; // Set sumber gambar
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});

// Fungsi untuk memotong gambar berdasarkan posisi tombol yang ditekan dan menampilkannya
function cropAndDisplayImages1() {
    const cropPositions = [
        { xOffset: 0, buttonIndex: 0 }, // Crop kiri atas
        { xOffset: (canvas1.width - (canvas1.height * 4) / 5) / 2, buttonIndex: 1 }, // Crop tengah atas
        { xOffset: canvas1.width - (canvas1.height * 4) / 5, buttonIndex: 2 } // Crop kanan atas
    ];

    cropPositions.forEach(({ xOffset, buttonIndex }) => {
        const width = (canvas1.height * 4) / 5; // Rasio 4:5
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = canvas1.height;
        const croppedCtx = croppedCanvas.getContext('2d');

        croppedCtx.drawImage(canvas1, xOffset, 0, width, canvas1.height, 0, 0, width, canvas1.height);

        const imgElement = document.createElement('img');
        imgElement.src = croppedCanvas.toDataURL();
        imgElement.alt = `Crop ${buttonIndex + 1}`;
        imgElement.style.width = '100px'; // Atur lebar gambar hasil potongan
        imgElement.style.marginRight = '10px'; // Tambahkan margin antar gambar

        // Menambahkan event listener untuk mengunduh gambar saat disentuh
        imgElement.addEventListener('click', () => {
            downloadImage(croppedCanvas.toDataURL(), `crop-${buttonIndex + 1}.png`);
        });

        document.getElementById('download-container-1').appendChild(imgElement);
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


















const upload2 = document.getElementById('upload-2');
const canvas2 = document.getElementById('canvas-2');
const ctx2 = canvas2.getContext('2d');
let img2;

const widthSlider2 = document.getElementById('width-slider-2');
const widthValue2 = document.getElementById('width-value-2');
const heightValue2 = document.getElementById('height-value-2');
const decreaseButton2 = document.getElementById('decrease-button-2');
const increaseButton2 = document.getElementById('increase-button-2');

const ratio2 = 0.8700906344; // Rasio height terhadap width

// Fungsi untuk memperbarui nilai width dan height
function updateValues2() {
    const width = parseFloat(widthSlider2.value);
    const height = Math.round(width * ratio2); // Menggunakan perkalian untuk menghitung tinggi
    
    widthValue2.textContent = width;
    heightValue2.textContent = height;
}

// Event listener untuk slider
widthSlider2.addEventListener('input', updateValues2);

// Event listener untuk tombol kurang
decreaseButton2.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider2.value);
    if (currentValue > parseInt(widthSlider2.min)) {
        currentValue -= 10; // Mengurangi lebar sebesar 10
        widthSlider2.value = currentValue; // Set nilai slider
        updateValues2(); // Update tampilan nilai
    }
});

// Event listener untuk tombol tambah
increaseButton2.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider2.value);
    if (currentValue < parseInt(widthSlider2.max)) {
        currentValue += 10; // Menambah lebar sebesar 10
        widthSlider2.value = currentValue; // Set nilai slider
        updateValues2(); // Update tampilan nilai
    }
});

// Inisialisasi nilai awal
updateValues2();

// Fungsi untuk memuat gambar ke kanvas dan menampilkan potongan
upload2.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img2 = new Image();
            img2.onload = function() {
                ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Bersihkan canvas sebelum menggambar
                ctx2.drawImage(img2, 0, 0, canvas2.width, canvas2.height); // Gambar gambar ke canvas
                canvas2.style.display = 'none'; // Tampilkan canvas setelah gambar dimuat

                // Kosongkan download-container sebelum menampilkan potongan baru
                document.getElementById('download-container-2').innerHTML = '';
                
                cropAndDisplayImages2(); // Menampilkan semua hasil potongan sekaligus setelah gambar dimuat
            }
            img2.src = event.target.result; // Set sumber gambar
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});

// Fungsi untuk memotong gambar berdasarkan posisi tombol yang ditekan dan menampilkannya
function cropAndDisplayImages2() {
    const cropPositions = [
        { yOffset: 0, xOffset: 0, buttonIndex: 0 }, // Crop kiri atas
        { yOffset: 0, xOffset: (canvas2.width - (canvas2.height / 2 * 4) / 5) / 2, buttonIndex: 1 }, // Crop tengah atas
        { yOffset: 0, xOffset: canvas2.width - (canvas2.height / 2 * 4) / 5, buttonIndex: 2 }, // Crop kanan atas
        { yOffset: (canvas2.height / 2), xOffset: 0, buttonIndex: 3 }, // Crop kiri bawah 
        { yOffset: (canvas2.height / 2), xOffset: (canvas2.width - (canvas2.height / 2 * 4) /5)/2 , buttonIndex: 4 }, // Crop tengah bawah 
        { yOffset: (canvas2.height / 2), xOffset: canvas2.width - (canvas2.height/2*4)/5 , buttonIndex: 5 } // Crop kanan bawah 
    ];

    cropPositions.forEach(({ yOffset, xOffset, buttonIndex }) => {
        const width = (canvas2.height / 2 * 4) / 5; // Rasio potongan sesuai dengan ukuran yang diinginkan 
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = canvas2.height / 2; 
        const croppedCtx = croppedCanvas.getContext('2d');

        croppedCtx.drawImage(canvas2, xOffset, yOffset, width, canvas2.height / 2,
                              0,
                              0,
                              width,
                              croppedCanvas.height);

        const imgElement = document.createElement('img');
        imgElement.src = croppedCanvas.toDataURL();
        imgElement.alt = `Crop ${buttonIndex + 1}`;
        imgElement.style.width = '100px'; 
        imgElement.style.marginRight = '10px'; 

        imgElement.addEventListener('click', () => {
            downloadImage(croppedCanvas.toDataURL(), `crop-${buttonIndex + 1}.png`);
        });

        document.getElementById('download-container-2').appendChild(imgElement);
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



















const upload3 = document.getElementById('upload-3');
const canvas3 = document.getElementById('canvas-3');
const ctx3 = canvas3.getContext('2d');
let img3;

const widthSlider3 = document.getElementById('width-slider-3');
const widthValue3 = document.getElementById('width-value-3');
const heightValue3 = document.getElementById('height-value-3');
const decreaseButton3 = document.getElementById('decrease-button-3');
const increaseButton3 = document.getElementById('increase-button-3');

const ratio3 = 1.3051359517; // Rasio height terhadap width

// Fungsi untuk memperbarui nilai width dan height
function updateValues3() {
    const width = parseFloat(widthSlider3.value);
    const height = Math.round(width * ratio3); // Menggunakan perkalian untuk menghitung tinggi
    
    widthValue3.textContent = width;
    heightValue3.textContent = height;
}

// Event listener untuk slider
widthSlider3.addEventListener('input', updateValues3);

// Event listener untuk tombol kurang
decreaseButton3.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider3.value);
    if (currentValue > parseInt(widthSlider3.min)) {
        currentValue -= 10; // Mengurangi lebar sebesar 10
        widthSlider3.value = currentValue; // Set nilai slider
        updateValues3(); // Update tampilan nilai
    }
});

// Event listener untuk tombol tambah
increaseButton3.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider3.value);
    if (currentValue < parseInt(widthSlider3.max)) {
        currentValue += 10; // Menambah lebar sebesar 10
        widthSlider3.value = currentValue; // Set nilai slider
        updateValues3(); // Update tampilan nilai
    }
});

// Inisialisasi nilai awal
updateValues3();

// Fungsi untuk memuat gambar ke kanvas dan menampilkan potongan
upload3.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img3 = new Image();
            img3.onload = function() {
                ctx3.clearRect(0, 0, canvas3.width, canvas3.height); // Bersihkan canvas sebelum menggambar
                ctx3.drawImage(img3, 0, 0, canvas3.width, canvas3.height); // Gambar gambar ke canvas
                canvas3.style.display = 'none'; // Tampilkan canvas setelah gambar dimuat

                // Kosongkan download-container sebelum menampilkan potongan baru
                document.getElementById('download-container-3').innerHTML = '';
                
                cropAndDisplayImages3(); // Menampilkan semua hasil potongan sekaligus setelah gambar dimuat
            }
            img3.src = event.target.result; // Set sumber gambar
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});

// Fungsi untuk memotong gambar berdasarkan posisi tombol yang ditekan dan menampilkannya
function cropAndDisplayImages3() {
    const cropPositions = [
        { yOffset: 0, xOffset: 0, buttonIndex: 0 }, // Crop kiri atas
        { yOffset: 0, xOffset: (canvas3.width - (canvas3.height / 3 * 4) / 5) / 2, buttonIndex: 1 }, // Crop tengah atas
        { yOffset: 0, xOffset: canvas3.width - (canvas3.height / 3 * 4) / 5, buttonIndex: 2 }, // Crop kanan atas

        { yOffset: (canvas3.height / 3), xOffset: 0, buttonIndex: 3 }, // Crop kiri tengah atas
        { yOffset: (canvas3.height / 3), xOffset: (canvas3.width - (canvas3.height / 3 * 4) / 5) / 2, buttonIndex: 4 }, // Crop tengah tengah atas
        { yOffset: (canvas3.height / 3), xOffset: canvas3.width - (canvas3.height / 3 * 4) / 5, buttonIndex: 5 }, // Crop kanan tengah atas

        { yOffset: (canvas3.height * (2 / 3)), xOffset: 0, buttonIndex: 6 }, // Crop kiri tengah bawah 
        { yOffset: (canvas3.height * (2 / 3)), xOffset: (canvas3.width - (canvas3.height / 3 * 4) / 5) / 2, buttonIndex: 7 }, // Crop tengah bawah 
        { yOffset: (canvas3.height * (2 / 3)), xOffset: canvas3.width - (canvas3.height / 3 * 4) / 5, buttonIndex: 8 } // Crop kanan bawah 
    ];

    cropPositions.forEach(({ yOffset, xOffset, buttonIndex }) => {
        const width = (canvas3.height / 3 * 4) / 5; // Rasio potongan sesuai dengan ukuran yang diinginkan 
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = canvas3.height / 3; 
        const croppedCtx = croppedCanvas.getContext('2d');

        croppedCtx.drawImage(canvas3, xOffset, yOffset, width, canvas3.height / 3, 0, 0, width, croppedCanvas.height);

        const imgElement = document.createElement('img');
        imgElement.src = croppedCanvas.toDataURL();
        imgElement.alt = `Crop ${buttonIndex + 1}`;
        imgElement.style.width = '100px'; 
        imgElement.style.marginRight = '10px'; 

        imgElement.addEventListener('click', () => {
            downloadImage(croppedCanvas.toDataURL(), `crop-${buttonIndex + 1}.png`);
        });

        document.getElementById('download-container-3').appendChild(imgElement);
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










const upload4 = document.getElementById('upload-4');
const canvas4 = document.getElementById('canvas-4');
const ctx4 = canvas4.getContext('2d');
let img4;

const widthSlider4 = document.getElementById('width-slider-4');
const widthValue4 = document.getElementById('width-value-4');
const heightValue4 = document.getElementById('height-value-4');
const decreaseButton4 = document.getElementById('decrease-button-4');
const increaseButton4 = document.getElementById('increase-button-4');

const ratio4 = 1.7401812689; // Rasio height terhadap width

// Fungsi untuk memperbarui nilai width dan height
function updateValues4() {
    const width = parseFloat(widthSlider4.value);
    const height = Math.round(width * ratio4); // Menggunakan perkalian untuk menghitung tinggi
    
    widthValue4.textContent = width;
    heightValue4.textContent = height;
}

// Event listener untuk slider
widthSlider4.addEventListener('input', updateValues4);

// Event listener untuk tombol kurang
decreaseButton4.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider4.value);
    if (currentValue > parseInt(widthSlider4.min)) {
        currentValue -= 10; // Mengurangi lebar sebesar 10
        widthSlider4.value = currentValue; // Set nilai slider
        updateValues4(); // Update tampilan nilai
    }
});

// Event listener untuk tombol tambah
increaseButton4.addEventListener('click', () => {
    let currentValue = parseInt(widthSlider4.value);
    if (currentValue < parseInt(widthSlider4.max)) {
        currentValue += 10; // Menambah lebar sebesar 10
        widthSlider4.value = currentValue; // Set nilai slider
        updateValues4(); // Update tampilan nilai
    }
});

// Inisialisasi nilai awal
updateValues4();

// Fungsi untuk memuat gambar ke kanvas dan menampilkan potongan
upload4.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img4 = new Image();
            img4.onload = function() {
                ctx4.clearRect(0, 0, canvas4.width, canvas4.height); // Bersihkan canvas sebelum menggambar
                ctx4.drawImage(img4, 0, 0, canvas4.width, canvas4.height); // Gambar gambar ke canvas
                canvas4.style.display = 'none'; // Tampilkan canvas setelah gambar dimuat

                // Kosongkan download-container sebelum menampilkan potongan baru
                document.getElementById('download-container-4').innerHTML = '';
                
                cropAndDisplayImages4(); // Menampilkan semua hasil potongan sekaligus setelah gambar dimuat
            }
            img4.src = event.target.result; // Set sumber gambar
        }
        reader.readAsDataURL(file); // Baca file sebagai URL data
    }
});

// Fungsi untuk memotong gambar berdasarkan posisi tombol yang ditekan dan menampilkannya
function cropAndDisplayImages4() {
    const cropPositions = [
        { yOffset: 0, xOffset: 0, buttonIndex: 0 }, // Crop kiri atas
        { yOffset: 0, xOffset: (canvas4.width - (canvas4.height / 4 * 4) / 5) / 2, buttonIndex: 1 }, // Crop tengah atas
        { yOffset: 0, xOffset: canvas4.width - (canvas4.height / 4 * 4) / 5, buttonIndex: 2 }, // Crop kanan atas

        { yOffset: (canvas4.height / 4), xOffset: 0, buttonIndex: 3 }, // Crop kiri tengah atas
        { yOffset: (canvas4.height / 4), xOffset: (canvas4.width - (canvas4.height / 4 * 4) / 5) / 2, buttonIndex: 4 }, // Crop tengah tengah atas
        { yOffset: (canvas4.height / 4), xOffset: canvas4.width - (canvas4.height / 4 * 4) / 5, buttonIndex: 5 }, // Crop kanan tengah atas

        { yOffset: (canvas4.height / 2), xOffset: 0, buttonIndex: 6 }, // Crop kiri tengah bawah 
        { yOffset: (canvas4.height / 2), xOffset: (canvas4.width - (canvas4.height / 4 * 4) / 5) / 2, buttonIndex: 7 }, // Crop tengah bawah 
        { yOffset: (canvas4.height / 2), xOffset: canvas4.width - (canvas4.height / 4 * 4) / 5, buttonIndex: 8 }, // Crop kanan tengah bawah

        { yOffset: (canvas4.height * (3 / 4)), xOffset: 0, buttonIndex: 9 }, // Crop kiri bawah 
        { yOffset: (canvas4.height * (3 / 4)), xOffset: (canvas4.width - (canvas4.height / 4 * 4) / 5) / 2, buttonIndex: 10 }, // Crop tengah bawah 
        { yOffset: (canvas4.height * (3 / 4)), xOffset: canvas4.width - (canvas4.height / 4 * 4) / 5, buttonIndex: 11 } // Crop kanan bawah 
    ];

    cropPositions.forEach(({ yOffset, xOffset, buttonIndex }) => {
        const width = (canvas4.height / 4 * 4) / 5; // Rasio potongan sesuai dengan ukuran yang diinginkan 
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = canvas4.height / 4; 
        const croppedCtx = croppedCanvas.getContext('2d');

        croppedCtx.drawImage(canvas4, xOffset, yOffset, width, canvas4.height / 4,
                              0,
                              0,
                              width,
                              croppedCanvas.height);

        const imgElement = document.createElement('img');
        imgElement.src = croppedCanvas.toDataURL();
        imgElement.alt = `Crop ${buttonIndex + 1}`;
        imgElement.style.width = '100px'; 
        imgElement.style.marginRight = '10px'; 

        imgElement.addEventListener('click', () => {
            downloadImage(croppedCanvas.toDataURL(), `crop-${buttonIndex + 1}.png`);
        });

        document.getElementById('download-container-4').appendChild(imgElement);
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















function openTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    // Show the selected tab
    document.getElementById(tab).classList.add('active');

    // Update active link
    document.querySelectorAll('.tab-links').forEach(link => link.classList.remove('active'));
    document.querySelector(`.tab-links[onclick="openTab('${tab}')"]`).classList.add('active');

    // Update header text based on the active tab
    const headerElement = document.querySelector('header h1'); // Select the header element
    switch (tab) {
        case 'tab1':
            headerElement.textContent = 'GRID MAKER 3x1';
            break;
        case 'tab2':
            headerElement.textContent = 'GRID MAKER 3x2';
            break;
        case 'tab3':
            headerElement.textContent = 'GRID MAKER 3x3';
            break;
        case 'tab4':
            headerElement.textContent = 'GRID MAKER 3x4';
            break;
        default:
            headerElement.textContent = 'GRID MAKER'; // Fallback if no tab matches
    }
}

// Open the first tab by default
openTab('tab1');
