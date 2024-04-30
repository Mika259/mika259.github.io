// Fungsi untuk menampilkan pesan berdasarkan waktu
function greetByTime() {
    const date = new Date(); // Dapatkan objek Date yang berisi waktu saat ini
    const hours = date.getHours(); // Ambil jam saat ini (dalam format 24 jam)

    let greeting;

    // Tentukan pesan berdasarkan jam
    if (hours >= 5 && hours < 12) {
        greeting = "Pagi";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Petang";
    } else {
        greeting = "Malam";
    }

    // Tampilkan pesan di elemen dengan id "greeting-text"
    document.getElementById("greeting-text").innerText = greeting;
}