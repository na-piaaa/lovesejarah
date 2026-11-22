const sejarah = [
{
    judul: "Proklamasi Kemerdekaan Indonesia",
    tanggal: "17 Agustus 1945",
    tempat: "Jakarta, Indonesia",
    tokoh: "Soekarno dan Mohammad Hatta",
    kategori: "Indonesia",
    cerita: "Soekarno membacakan teks proklamasi didampingi Mohammad Hatta. Peristiwa ini menandai kemerdekaan Indonesia setelah masa penjajahan."
},
{
    judul: "Sumpah Pemuda",
    tanggal: "28 Oktober 1928",
    tempat: "Batavia (Jakarta)",
    tokoh: "Mohammad Yamin dan para pemuda",
    kategori: "Indonesia",
    cerita: "Kongres Pemuda II menghasilkan ikrar satu tanah air, satu bangsa, dan satu bahasa yaitu Indonesia."
},
{
    judul: "Pertempuran Surabaya",
    tanggal: "10 November 1945",
    tempat: "Surabaya, Indonesia",
    tokoh: "Bung Tomo dan para pejuang",
    kategori: "Indonesia",
    cerita: "Rakyat Surabaya berjuang mempertahankan kemerdekaan Indonesia dari pasukan Sekutu."
},
{
    judul: "Revolusi Prancis",
    tanggal: "1789",
    tempat: "Paris, Prancis",
    tokoh: "Maximilien Robespierre dan tokoh revolusi lainnya",
    kategori: "Dunia",
    cerita: "Revolusi Prancis membawa perubahan besar terhadap pemerintahan dan masyarakat Prancis."
},
{
    judul: "Pendaratan Manusia di Bulan",
    tanggal: "20 Juli 1969",
    tempat: "Bulan",
    tokoh: "Neil Armstrong dan Buzz Aldrin",
    kategori: "Dunia",
    cerita: "Misi Apollo 11 berhasil membawa manusia pertama mendarat di permukaan Bulan."
},
{
    judul: "Peradaban Mesir Kuno",
    tanggal: "Sekitar 3100 SM",
    tempat: "Lembah Sungai Nil, Mesir",
    tokoh: "Firaun dan masyarakat Mesir Kuno",
    kategori: "Dunia",
    cerita: "Mesir Kuno dikenal dengan piramida, hieroglif, serta perkembangan ilmu pengetahuan dan arsitektur."
}
];

const tokoh = [
"1. Soekarno - Proklamator dan Presiden pertama Indonesia.",
"2. Mohammad Hatta - Wakil Presiden pertama Indonesia.",
"3. R.A. Kartini - Tokoh emansipasi perempuan.",
"4. Ki Hajar Dewantara - Tokoh pendidikan Indonesia.",
"5. Bung Tomo - Tokoh perjuangan Surabaya.",
"6. Nelson Mandela - Tokoh perjuangan melawan apartheid.",
"7. Cleopatra - Penguasa Mesir Kuno.",
"8. Julius Caesar - Tokoh penting dalam sejarah Romawi."
];

function tampilkanSejarah(data) {
    const tempat = document.getElementById("daftarSejarah");

    tempat.innerHTML = "";

    data.forEach((item, index) => {
        tempat.innerHTML += `
        <div class="kartu">
            <h3>${item.judul}</h3>
            <p><b>Tanggal:</b> ${item.tanggal}</p>
            <p><b>Tempat:</b> ${item.tempat}</p>
            <p><b>Kategori:</b> ${item.kategori}</p>
            <button onclick="detailSejarah(${index})">
                Baca Selengkapnya
            </button>
            <p id="detail${index}"></p>
        </div>`;
    });
}

function detailSejarah(index) {
    const item = sejarah[index];

    document.getElementById("detail" + index).innerHTML = `
        <br>
        <b>Tokoh:</b> ${item.tokoh}
        <br><br>
        <b>Cerita Sejarah:</b> ${item.cerita}
    `;
}

document.getElementById("cari").addEventListener("input", function() {
    const kata = this.value.toLowerCase();

    const hasil = sejarah.filter(item =>
        (item.judul + item.tempat + item.kategori + item.tokoh)
        .toLowerCase().includes(kata)
    );

    tampilkanSejarah(hasil);
});

function tampilkanTokoh() {
    const tempat = document.getElementById("daftarTokoh");

    tokoh.forEach(nama => {
        tempat.innerHTML += `
            <div class="kartu">
                <p>${nama}</p>
            </div>
        `;
    });
}

// KUIS SEJARAH
const soal = [
{
    tanya: "Siapa yang membacakan teks Proklamasi Indonesia?",
    pilihan: ["Soekarno", "Bung Tomo", "Ki Hajar Dewantara", "Jenderal Sudirman"],
    benar: 0
},
{
    tanya: "Kapan Indonesia merdeka?",
    pilihan: ["17 Agustus 1945", "28 Oktober 1928", "10 November 1945", "20 Mei 1908"],
    benar: 0
},
{
    tanya: "Di mana Sumpah Pemuda dilaksanakan?",
    pilihan: ["Bandung", "Batavia", "Surabaya", "Yogyakarta"],
    benar: 1
},
{
    tanya: "Siapa wakil presiden pertama Indonesia?",
    pilihan: ["Soeharto", "Mohammad Hatta", "B.J. Habibie", "Sutan Sjahrir"],
    benar: 1
},
{
    tanya: "Kapan Pertempuran Surabaya diperingati?",
    pilihan: ["17 Agustus", "28 Oktober", "10 November", "1 Juni"],
    benar: 2
},
{
    tanya: "Siapa manusia pertama yang berjalan di Bulan?",
    pilihan: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    benar: 1
},
{
    tanya: "Di negara mana piramida Giza berada?",
    pilihan: ["Yunani", "Italia", "Mesir", "India"],
    benar: 2
},
{
    tanya: "Revolusi Prancis dimulai pada tahun berapa?",
    pilihan: ["1789", "1945", "1908", "1969"],
    benar: 0
},
{
    tanya: "Siapa tokoh emansipasi perempuan Indonesia?",
    pilihan: ["R.A. Kartini", "Cut Nyak Dien", "Dewi Sartika", "Martha Christina Tiahahu"],
    benar: 0
},
{
    tanya: "Siapa tokoh perjuangan melawan apartheid di Afrika Selatan?",
    pilihan: ["Augustus", "Nelson Mandela", "Julius Caesar", "Napoleon"],
    benar: 1
}
];

let nomor = 0;
let nilai = 0;
let sudahMenjawab = false;

function tampilkanSoal() {
    sudahMenjawab = false;

    const tempat = document.getElementById("areaKuis");
    const item = soal[nomor];

    tempat.innerHTML = `
        <h3>Soal ${nomor + 1} dari ${soal.length}</h3>
        <br>
        <h3>${item.tanya}</h3>
        <br>
        ${item.pilihan.map((pilihan, index) => `
            <button class="pilihan"
            onclick="periksaJawaban(${index})">
                ${String.fromCharCode(65 + index)}. ${pilihan}
            </button>
        `).join("")}
        <p id="hasilJawaban"></p>
        <br>
        <button id="lanjut" onclick="soalBerikutnya()" disabled>
            Berikutnya
        </button>
    `;
}

function periksaJawaban(jawaban) {
    if (sudahMenjawab) return;

    sudahMenjawab = true;

    const benar = soal[nomor].benar;

    if (jawaban === benar) {
        nilai++;
        document.getElementById("hasilJawaban").innerHTML =
            "Benar! Jawaban kamu tepat.";
    } else {
        document.getElementById("hasilJawaban").innerHTML =
            "Belum tepat. Jawaban yang benar adalah: " +
            soal[nomor].pilihan[benar];
    }

    document.querySelectorAll(".pilihan").forEach(tombol => {
        tombol.disabled = true;
    });

    document.getElementById("lanjut").disabled = false;
}

function soalBerikutnya() {
    nomor++;

    if (nomor < soal.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    document.getElementById("areaKuis").innerHTML = `
        <h2>🎉 Kuis Selesai!</h2>
        <h3>Nilai kamu: ${nilai * 10}/100</h3>
        <p>Jawaban benar: ${nilai} dari ${soal.length} soal.</p>
        <br>
        <button onclick="ulangKuis()">Ulangi Kuis</button>
    `;
}

function ulangKuis() {
    nomor = 0;
    nilai = 0;
    tampilkanSoal();
}

tampilkanSejarah(sejarah);
tampilkanTokoh();
tampilkanSoal();
￼Enter
