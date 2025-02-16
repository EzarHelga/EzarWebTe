document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".fade-in").classList.add("visible");
});

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

const konten = [
    "<h5>Rekomendasi: Belajar HTML dan CSS untuk Pemula</h5><p><h6>HTML dan CSS adalah dasar utama dalam pengembangan web...<h5></p>",
    "<h5>Rekomendasi: JavaScript untuk Pemula</h5><p><h6>JavaScript memungkinkan pembuatan halaman web yang interaktif...</h6></p>",
    "<h5>Rekomendasi: Panduan Web Responsif</h5><p><h6>Desain responsif sangat penting agar website dapat diakses di berbagai perangkat...</h6></p>",
];

function acakKonten() {
    const randomIndex = Math.floor(Math.random() * konten.length);
    document.getElementById("konten-terpilih").innerHTML = konten[randomIndex];
}
