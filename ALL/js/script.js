// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#barbershop-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");

// Klik di luar elemen
const hm = document.querySelector("#barbershop-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e2) => {
    itemDetailModal.style.display = "flex";
    e2.preventDefault();
  };
});

const datadetailvideo = document.querySelector("#data-detail-video");
const datavideobuttons = document.querySelectorAll(".data-video-button");

datavideobuttons.forEach((btn) => {
  btn.onclick = (e1) => {
    datadetailvideo.style.display = "flex";
    e1.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e2) => {
  itemDetailModal.style.display = "none";
  e2.preventDefault();
};

document.querySelector(".video .close-icon").onclick = (e1) => {
  datadetailvideo.style.display = "none";
  e1.preventDefault();
};

// klik di luar modal
window.onclick = (e2) => {
  if (e2.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

window.onclick = (e1) => {
  if (e1.target === datadetailvideo) {
    datadetailvideo.style.display = "none";
  }
};
