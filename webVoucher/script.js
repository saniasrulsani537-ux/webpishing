function loginCheck() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  const validUsername = "asrul sani"; // ganti sesuai kebutuhan
  const validPassword = "hidayatul adniyah"; // ganti sesuai kebutuhan

  if (username === validUsername && password === validPassword) {
    // Tampilkan pesan sukses
    message.style.color = "green";
    message.innerText = "tunggu sebentarr...";

    // Redirect setelah 1 detik
    setTimeout(() => {
      window.location.href = "succes.html"; // ganti dengan nama file halaman sukses
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Username atau Password salah coba diperiksa lagi!";
  }
}

// =========================
// HAMBURGER MENU RESPONSIF
// =========================
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
document.querySelectorAll(".paket-card").forEach((card) => {
  card.addEventListener("click", function () {
    let nama = this.getAttribute("data-pesan");
    let harga = this.getAttribute("data-harga");

    let konfirmasi = confirm(`Yakin ingin membeli ${nama} seharga ${harga}?`);

    if (konfirmasi) {
      let pesanWA = encodeURIComponent(
        `Halo kak, saya ingin membeli ${nama} dengan harga ${harga}.`
      );

      // Ganti nomor WA di bawah ini (format 62xxx)
      window.location.href = `https://wa.me/6283151118892?text=${pesanWA}`;
    }
  });
});
