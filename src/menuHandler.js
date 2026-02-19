const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

function openSidebar() {
    sidebar.style.right = "0";
    overlay.classList.remove("hidden");
}

function closeSidebar() {
    sidebar.style.right = "-260px";
    overlay.classList.add("hidden");
}

menuBtn.addEventListener("click", openSidebar);
closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
