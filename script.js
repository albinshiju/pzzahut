// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to toggle "sticky" class on the navbar
function toggleStickyNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Attach event listener to the scroll event
window.addEventListener("scroll", toggleStickyNavbar);
