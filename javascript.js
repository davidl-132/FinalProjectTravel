// Lấy nút
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Khi người dùng cuộn xuống 20px từ đầu trang, hiện nút
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

// Khi người dùng nhấp vào nút, cuộn lên đầu trang với hiệu ứng mượt mà
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Thêm hiệu ứng chuyển đổi mượt mà
  });
};
